ESX = nil
TriggerEvent('esx:getSharedObject', function(obj) ESX = obj end)

RegisterServerEvent("magni-ipad:create")
AddEventHandler("magni-ipad:create", function(data)
    Discordlog(data)
end)

ESX.RegisterUsableItem('ipad', function(source)
	local xPlayer = ESX.GetPlayerFromId(source)
	TriggerClientEvent('magni-ipad:client:open', source)
end)

function Discordlog(data)
    local src = source
    local ts = os.time()
    local xPlayer = ESX.GetPlayerFromId(src)
    local identifier = xPlayer.identifier
    local time = os.date('%Y-%m-%d %H:%M:%S', ts)
    local connect = {
        {
            ["title"] = data.title,
            ["description"] = '**Sender :**'..identifier..'\n'..data.description,
            ["footer"] = {
                ["text"] = ""..time,
            },
            
        }
    }
    PerformHttpRequest(Config.Webhook, function(err, text, headers) end, 'POST', json.encode({username = data.select, embeds = connect}), { ['Content-Type'] = 'application/json' })
end