local isOpen = false

RegisterNetEvent("magni-ipad:client:open")
AddEventHandler("magni-ipad:client:open", function()
    SendNUIMessage({
        ServerAbout = Config.Serverabout,
        ServerRules = Config.ServerRules,
        Key = Config.KeyAssignments,
        Jobs = Config.Jobs,
        Serverfeatures = Config.Serverfeatures,
        type = "open"
    })
    SetNuiFocus(true, true)
    isOpen = true
end)

RegisterCommand('ipad',function()
    if Config.Command then
        hour = GetClockHours()
        minute = GetClockMinutes()
        startAnim()
        CalculateTimeToDisplay()
        TriggerEvent('magni-ipad:client:open')
    end
end)

RegisterNUICallback("create", function(data)
    TriggerServerEvent("magni-ipad:create", data)
end)

RegisterNUICallback("close", function()
    stopAnim()
    SetNuiFocus(false, false)
    isOpen = false
end)

Citizen.CreateThread(function()
    while true do
        if isOpen then
            SendNUIMessage({
                type = "UpdateTime",
                InGameTime = CalculateTimeToDisplay(),
            })
        end
        Citizen.Wait(1000)
    end
end)


function CalculateTimeToDisplay()
	hour = GetClockHours()
    minute = GetClockMinutes()
    
    local obj = {}

	if minute <= 9 then
		minute = "0" .. minute
    end
    
    obj.hour = hour
    obj.minute = minute

    return obj
end

function startAnim()
    Citizen.CreateThread(function()
      RequestAnimDict("amb@world_human_seat_wall_tablet@female@base")
      while not HasAnimDictLoaded("amb@world_human_seat_wall_tablet@female@base") do
        Citizen.Wait(0)
      end
        attachObject()
        TaskPlayAnim(GetPlayerPed(-1), "amb@world_human_seat_wall_tablet@female@base", "base" ,8.0, -8.0, -1, 50, 0, false, false, false)
    end)
end

function attachObject()
    tab = CreateObject(GetHashKey("prop_cs_tablet"), 0, 0, 0, true, true, true)
    AttachEntityToEntity(tab, GetPlayerPed(-1), GetPedBoneIndex(GetPlayerPed(-1), 57005), 0.17, 0.10, -0.13, 20.0, 180.0, 180.0, true, true, false, true, 1, true)
end

function stopAnim()
    StopAnimTask(GetPlayerPed(-1), "amb@world_human_seat_wall_tablet@female@base", "base" ,8.0, -8.0, -1, 50, 0, false, false, false)
    DeleteEntity(tab)
end