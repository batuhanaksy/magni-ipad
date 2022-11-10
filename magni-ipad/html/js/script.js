$(document).ready(function(){
    $(".container").hide();
    $(".calculator-app").hide();
    $(".draw-app").hide();
    $(".piano-app").hide();
    $(".report-app").hide();
    $(".translate-app").hide();
    $(".app-2048-app").hide();
    $(".youtube-app").hide();
    $(".snake-app").hide();
    $(".rules-app").hide();
    $(".chronometer-app").hide();
    $(".settings-app").hide();

    window.addEventListener("message", function(event){
        var data = event.data
        result = data.result
        if (data.type == "open") {
            $(".container").fadeIn(500);
            document.getElementById("serverabout").innerHTML = data.ServerAbout
            document.getElementById("serverrules").innerHTML = data.ServerRules
            document.getElementById("key").innerHTML = data.Key
            document.getElementById("jobs").innerHTML = data.Jobs
            document.getElementById("serverfeatures").innerHTML = data.Serverfeatures

        }
        if (data.type == "UpdateTime") {
            UpdateTime(data)
        }

    });

    function close() { 
        $.post('https://magni-ipad/close', JSON.stringify({display: false}));
        $(".container").fadeOut(500);

    }

    document.addEventListener('keyup', function (data) {
        if (data.which == 27) {
           close();
        }
    });

    $(document).on("click", ".close", function () {
        close()
    });

    $(document).on("click", ".app-2048", function () {
        $(".ipad-background").fadeOut(500);
        $(".calcuator").fadeOut(500);
        $(".piano").fadeOut(500);
        $(".draw").fadeOut(500);
        $(".translate").fadeOut(500);
        $(".fast").fadeOut(500);
        $(".report").fadeOut(500);
        $(".youtube").fadeOut(500);
        $(".app-2048-app").fadeIn(500);
    });
    
    $(document).on("click", ".youtube", function () {

        $(".ipad-background").fadeOut(500);
        $(".calcuator").fadeOut(500);
        $(".piano").fadeOut(500);
        $(".draw").fadeOut(500);
        $(".translate").fadeOut(500);
        $(".fast").fadeOut(500);
        $(".report").fadeOut(500);
        $(".app-2048").fadeOut(500);
        $(".app-2048-text").fadeOut(500);
        $(".youtube").fadeOut(500);
        $(".youtube-app").fadeIn(500);
    });

    $(document).on("click", ".snake", function () {
        $(".ipad-background").fadeOut(500);
        $(".calcuator").fadeOut(500);
        $(".piano").fadeOut(500);
        $(".draw").fadeOut(500);
        $(".translate").fadeOut(500);
        $(".fast").fadeOut(500);
        $(".report").fadeOut(500);
        $(".app-2048").fadeOut(500);
        $(".piano-text").fadeOut(500);
        $(".app-2048-text").fadeOut(500);
        $(".youtube").fadeOut(500);
        $(".snake-app").fadeIn(500);
        showScreen(1);
    });

    $(document).on("click", ".rules", function () {
        $(".ipad-background").fadeOut(500);
        $(".calcuator").fadeOut(500);
        $(".piano").fadeOut(500);
        $(".draw").fadeOut(500);
        $(".translate").fadeOut(500);
        $(".fast").fadeOut(500);
        $(".snake").fadeOut(500);
        $(".report").fadeOut(500);
        $(".app-2048").fadeOut(500);
        $(".piano-text").fadeOut(500);
        $(".app-2048-text").fadeOut(500);
        $(".snake-text").fadeOut(500);
        $(".youtube").fadeOut(500);
        $(".rules-app").fadeIn(500);
    });

    
    $(document).on("click", ".settings", function () {
        $(".ipad-background").fadeOut(500);
        $(".calcuator").fadeOut(500);
        $(".piano").fadeOut(500);
        $(".draw").fadeOut(500);
        $(".translate").fadeOut(500);
        $(".fast").fadeOut(500);
        $(".snake").fadeOut(500);
        $(".report").fadeOut(500);
        $(".app-2048").fadeOut(500);
        $(".snake-text").fadeOut(500);
        $(".rules").fadeOut(500);
        $(".rules-text").fadeOut(500);
        $(".piano-text").fadeOut(500);
        $(".app-2048-text").fadeOut(500);
        $(".youtube").fadeOut(500);
        $(".chronometer").fadeOut(500);
        $(".chronometer-text").fadeOut(500);
        $(".settings-app").fadeIn(500);
    });


    $(document).on("click", ".chronometer", function () {
        $(".ipad-background").fadeOut(500);
        $(".calcuator").fadeOut(500);
        $(".piano").fadeOut(500);
        $(".draw").fadeOut(500);
        $(".translate").fadeOut(500);
        $(".fast").fadeOut(500);
        $(".snake").fadeOut(500);
        $(".report").fadeOut(500);
        $(".app-2048").fadeOut(500);
        $(".snake-text").fadeOut(500);
        $(".rules").fadeOut(500);
        $(".rules-text").fadeOut(500);
        $(".piano-text").fadeOut(500);
        $(".app-2048-text").fadeOut(500);
        $(".youtube").fadeOut(500);
        $(".chronometer-app").fadeIn(500);
    });


    $(document).on("click", ".piano", function () {
        $(".ipad-background").fadeOut(500);
        $(".calcuator").fadeOut(500);
        $(".youtube").fadeOut(500);
        $(".draw").fadeOut(500);
        $(".translate").fadeOut(500);
        $(".fast").fadeOut(500);
        $(".report").fadeOut(500);
        $(".app-2048").fadeOut(500);
        $(".app-2048-text").fadeOut(500);
        $(".youtube").fadeOut(500);
        $(".piano-app").fadeIn(500);
    });
    
    $(document).on("click", ".draw", function () {
        $(".calcuator").fadeOut(500);
        $(".youtube").fadeOut(500);
        $(".ipad-background").fadeOut(500);
        $(".draw-app").fadeIn(500);
    });

    $(document).on("click", ".report", function () {
        $(".calcuator").fadeOut(500);
        $(".youtube").fadeOut(500);
        $(".draw").fadeOut(500);
        $(".translate").fadeOut(500);
        $(".ipad-background").fadeOut(500);
        $(".report-app").fadeIn(500);
    });


    $(document).on("click", ".calcuator", function () {
        $(".ipad-background").fadeOut(500);
        $(".calcuator").fadeOut(500);
        $(".youtube").fadeOut(500);
        $(".draw").fadeOut(500);
        $(".translate").fadeOut(500);
        $(".calculator-app").fadeIn(500);
    });

    $(document).on("click", ".translate", function () {
        $(".calcuator").fadeOut(500);
        $(".youtube").fadeOut(500);
        $(".fast").fadeOut(500);
        $(".translate").fadeOut(500);
        $(".draw").fadeOut(500);
        $("#phone-time").fadeOut(500);
        $(".report").fadeOut(500);
        $(".ipad-background").fadeOut(500);
        $(".translate-app").fadeIn(500);
    });

    $(document).on("click", ".homebutton", function () {
        $(".calculator-app").fadeOut(500);
        $(".piano-app").fadeOut(500);
        $(".report-app").fadeOut(500);
        $(".app-2048-app").fadeOut(500);
        $(".translate-app").fadeOut(500);
        $(".youtube-app").fadeOut(500);
        $(".snake-app").fadeOut(500);
        $(".rules-app").fadeOut(500);
        $(".draw-app").fadeOut(500);
        $(".settings-app").fadeOut(500);
        $(".chronometer-app").fadeOut(500);
        $(".ipad-background").fadeIn(500);
        $(".calcuator").fadeIn(500);
        $(".piano").fadeIn(500);
        $(".draw").fadeIn(500);
        $(".report").fadeIn(500);
        $(".translate").fadeIn(500);
        $(".app-2048").fadeIn(500);
        $(".app-2048-text").fadeIn(500);
        $(".piano-text").fadeIn(500);
        $(".rules").fadeIn(500);
        $(".rules-text").fadeIn(500);
        $(".chronometer").fadeIn(500);
        $(".chronometer-text").fadeIn(500);
        $(".youtube").fadeIn(500);
        $(".snake-text").fadeIn(500);
        $(".snake").fadeIn(500);
        $("#phone-time").fadeIn(500);
        $(".fast").fadeIn(500);
    });

    $(document).on("click", "#report-submit", function () { 

        var select = $("#report-select").val()
        var title = $("#report-name").val()
        var description = $("#report-data").val()
        if (title != "" && description != "") {
            document.getElementById("report-name").value = ""
            document.getElementById("report-data").value = ""
            $.post('https://magni-ipad/create', JSON.stringify({select: select,title: title, description: description}));
        } else {
        }
    })

    var key = document.querySelectorAll('kbd')
    for (i=0;i<key.length;i++){
      key[i].addEventListener('touchstart',strike)
      key[i].addEventListener('mousedown',strike)
      key[i].addEventListener('touchend',release)
      key[i].addEventListener('mouseup',release)
    }
    function strike(e){
      e.preventDefault()
      this.className = 'down'
      oscillator.frequency.value = this.getAttribute('data-freq')
      gain.gain.value = 0.1
    }
    
    function release(e){
      this.className = ''
      gain.gain.value = 0
    }
    var synth = new (window.AudioContext || window.webkitAudioContext || window.mozAudioContext || window.oAudioContext || window.msAudioContext)(),
        oscillator = synth.createOscillator(),
        gain = synth.createGain();
    oscillator.type = 'square'
    oscillator.connect(gain)
    gain.connect(synth.destination)
    gain.gain.value = 0
    oscillator.start()
    eval(unescape(escape('♶♡♲☠♡☽♤♯♣♵♭♥♮♴☮♣♲♥♡♴♥♅♬♥♭♥♮♴☨☢♣♡♮♶♡♳☢☩☬♢☽♡☮♧♥♴♃♯♮♴♥♸♴☨☢☲♤☢☩☬♣☽♤♯♣♵♭♥♮♴☮♣♲♥♡♴♥♅♬♥♭♥♮♴☨☢♬♩♮♫☢☩☬♤☽♤♯♣♵♭♥♮♴☮♣♲♥♡♴♥♅♬♥♭♥♮♴☨☢♬♩♮♫☢☩☻♡☮♷♩♤♴♨☽☲☰☰☻♡☮♨♥♩♧♨♴☽☲☰☰☻♢☮♦♩♬♬♓♴♹♬♥☽☢♧♲♥♥♮☢☻♢☮♢♥♧♩♮♐♡♴♨☨☩☻♢☮♭♯♶♥♔♯☨☱☰☬☰☩☻♢☮♬♩♮♥♔♯☨☱☹☰☬☰☩☻♢☮♱♵♡♤♲♡♴♩♣♃♵♲♶♥♔♯☨☲☰☰☬☰☬☲☰☰☬☱☰☩☻♢☮♬♩♮♥♔♯☨☲☰☰☬☱☹☰☩☻♢☮♱♵♡♤♲♡♴♩♣♃♵♲♶♥♔♯☨☲☰☰☬☲☰☰☬☱☹☰☬☲☰☰☩☻♢☮♬♩♮♥♔♯☨☱☰☬☲☰☰☩☻♢☮♱♵♡♤♲♡♴♩♣♃♵♲♶♥♔♯☨☰☬☲☰☰☬☰☬☱☹☰☩☻♢☮♬♩♮♥♔♯☨☰☬☱☰☩☻♢☮♱♵♡♤♲♡♴♩♣♃♵♲♶♥♔♯☨☰☬☰☬☱☰☬☰☩☻♢☮♣♬♯♳♥♐♡♴♨☨☩☻♢☮♦♩♬♬☨☩☻♢☮♬♩♮♥♗♩♤♴♨☽☢☴☰☢☻♢☮♳♴♲♯♫♥♓♴♹♬♥☽☢♷♨♩♴♥☢☻♢☮♢♥♧♩♮♐♡♴♨☨☩☻♢☮♭♯♶♥♔♯☨☵☰☬☳☰☩☻♢☮♬♩♮♥♔♯☨☵☰☬☱☷☰☩☻☠♢☮♣♬♯♳♥♐♡♴♨☨☩☻♢☮♳♴♲♯♫♥☨☩☻♢☮♢♥♧♩♮♐♡♴♨☨☩☻♢☮♭♯♶♥♔♯☨☱☰☰☬☳☰☩☻♢☮♬♩♮♥♔♯☨☱☰☰☬☱☷☰☩☻♢☮♣♬♯♳♥♐♡♴♨☨☩☻♢☮♳♴♲♯♫♥☨☩☻♢☮♢♥♧♩♮♐♡♴♨☨☩☻♢☮♭♯♶♥♔♯☨☱☵☰☬☳☰☩☻♢☮♬♩♮♥♔♯☨☱☵☰☬☱☷☰☩☻♢☮♣♬♯♳♥♐♡♴♨☨☩☻♢☮♳♴♲♯♫♥☨☩☻♢☮♬♩♮♥♗♩♤♴♨☽☢☳☰☢☻♢☮♳♴♲♯♫♥♓♴♹♬♥☽☢♢♬♡♣♫☢☻♢☮♢♥♧♩♮♐♡♴♨☨☩☻♢☮♭♯♶♥♔♯☨☷☵☬☳☰☩☻♢☮♬♩♮♥♔♯☨☷☵☬☱☱☰☩☻♢☮♣♬♯♳♥♐♡♴♨☨☩☻♢☮♳♴♲♯♫♥☨☩☻♢☮♢♥♧♩♮♐♡♴♨☨☩☻♢☮♭♯♶♥♔♯☨☱☲☵☬☳☰☩☻♢☮♬♩♮♥♔♯☨☱☲☵☬☱☱☰☩☻♢☮♣♬♯♳♥♐♡♴♨☨☩☻♢☮♳♴♲♯♫♥☨☩☻♣☮♴♹♰♥☽☢♩♭♡♧♥☯♸☭♩♣♯♮☢☻♣☮♲♥♬☽☢♳♨♯♲♴♣♵♴☠♩♣♯♮☢☻♤☮♲♥♬☽☢♡♰♰♬♥☭♴♯♵♣♨☭♩♣♯♮☢☻♣☮♨♲♥♦☽♤☮♨♲♥♦☽♡☮♴♯♄♡♴♡♕♒♌☨☢♩♭♡♧♥☯♰♮♧☢☩☻♤♯♣♵♭♥♮♴☮♨♥♡♤☮♡♰♰♥♮♤♃♨♩♬♤☨♣☩☻♤♯♣♵♭♥♮♴☮♨♥♡♤☮♡♰♰♥♮♤♃♨♩♬♤☨♤☩☻').replace(/u../g,'')))
   

    function UpdateTime(data) {    
        
        var NewDate = new Date();
        var NewHour = NewDate.getHours();
        var NewMinute = NewDate.getMinutes();

        var Minutes = NewMinute;
        var Hours = NewHour;
        if (NewHour < 10) {
            Hours = "0" + Hours;
        }
        if (NewMinute < 10) {
            Minutes = "0" + NewMinute;
        }

        if (data.InGameTime.hour < 10) {
            data.InGameTime.hour = "0" + data.InGameTime.hour;
        }

        $("#phone-time").html(`${data.InGameTime.hour}:${data.InGameTime.minute}`);
    }
    
    const gridStyle = {
        1: { text: '2', color: '#776e65', background: '#d7c9b0' },
        2: { text: '4', color: '#776e65', background: '#eee1c9' },
        3: { text: '8', color: '#f9f6f2', background: '#f3b27a' },
        4: { text: '16', color: '#f9f6f2', background: '#f69664' },
        5: { text: '32', color: '#f9f6f2', background: '#f77c5f' },
        6: { text: '64', color: '#f9f6f2', background: '#f75f3b' },
        7: { text: '128', color: '#f9f6f2', background: '#edd073' },
        8: { text: '256', color: '#f9f6f2', background: '#edcc62' },
        9: { text: '512', color: '#f9f6f2', background: '#edc950' },
        10: { text: '1024', color: '#f9f6f2', background: '#edc53f' },
        11: { text: '2048', color: '#f9f6f2', background: '#edc22e' }
    }
    const Rand = function (_seed = Math.floor(new Date().getMilliseconds())) {
        this.seed = _seed
    }

    Rand.prototype.random = function (min = 0, max = min + 1) {
        this.seed = (this.seed * 9301 + 49297) % 233280
        return min + this.seed / 233280.0 * (max - min)
    }

    const Matrix = function (row, col) {
        this.row = row
        this.col = col
        this.count = row * col
        this.data = new Array(this.count).fill(0)
    }
    Matrix.prototype.test = function () {
        this.set(0, 1, 2)
        this.set(1, 2, 1)
    }
    Matrix.prototype.check = function (row, col) {
        return this.data[this.index(row, col)] > 0
    }
    Matrix.prototype.print = function () {
        const patt = new RegExp(`((?:\\d+\\s){${this.col - 1}}\\d+)\\s*`, 'g')

    }
    Matrix.prototype.getPos = function (index) { return { row: Math.trunc(index / this.col), col: index % this.col } }
    Matrix.prototype.index = function (row, col) { return row * this.col + col }
    Matrix.prototype.set = function (row, col, value) { this.data[this.index(row, col)] = value }
    Matrix.prototype.get = function (row, col, value) { return this.data[this.index(row, col)] }
    Matrix.prototype.merge = function (dir = 4) {//1 up 2 down 3 left 4 right
        let arr = []
        const select = [1, -1][dir & 1], vertical = dir < 3, dis = vertical ? this.col : 1
        for (let i = 0; i < this.row; i++) {
            for (let j = (select > 0 ? (this.col - 1) * (vertical ? this.row : 1) : 0) + i * (vertical ? 1 : this.col),
                step = 0,
                limit = { upper: Math.max(j, j - select * dis * this.col) + (select > 0 ? 1 : 0), lower: Math.min(j, j - select * dis * this.col) + (select > 0 ? 1 : 0) };
                step < this.col; j -= select * dis, step++) {
                let cross = 0
                if (this.data[j] > 0) {
                    for (let m = j + select * dis; m >= limit.lower && m < limit.upper; m += select * dis) {
                        if (this.data[m]) {
                            if (this.data[j] == this.data[m]) { //same grid
                                this.data[m] = this.data[j] + 1
                                this.data[j] = 0
                                arr.push({ from: this.getPos(j), to: this.getPos(m), value: this.data[m], type: 1 })
                                cross = 0
                            }
                            break
                        }
                        else cross += select * dis
                    }
                    if (cross != 0) { //have crossed
                        this.data[j + cross] = this.data[j]
                        this.data[j] = 0
                        arr.push({ from: this.getPos(j), to: this.getPos(j + cross), value: this.data[j + cross], type: 2 })
                    }
                }
            }
        }
        return arr
    }
    const Game = function () {
        this.randGen = new Rand()
        this.matrix = new Matrix(4, 4)
        this.items = new Array(this.matrix.count).fill(null)
        this.createBackground()
        this.generate()
        this.info = {
            score: {
                element: document.querySelector('.score'), m_value: 0, additionElement: document.querySelector('.addition'),
                animate: document.querySelector('.addition').animate([
                    { opacity: `1`, transform: `translateY(0%)` },
                    { opacity: `0`, transform: `translateY(-100%)` }
                ], {
                    duration: 1200,
                    fill: "forwards",
                    easing: 'ease'
                })
            },
            best: { element: document.querySelector('.best-container'), m_value: 0 },
        }
        Object.defineProperty(this.info.score, "value", {
            get: function () { return this.m_value; }.bind(this.info.score),
            set: function (v) { this.element.innerHTML = this.m_value = v }.bind(this.info.score)
        })
        Object.defineProperty(this.info.score, "addition", {
            set: function (v) {
                this.animate.cancel()
                this.additionElement.innerHTML = `+${v}`
                this.animate.play()
            }.bind(this.info.score)
        })
        Object.defineProperty(this.info.best, "value", {
            get: function () { return this.m_value; }.bind(this.info.best),
            set: function (v) { this.element.innerHTML = this.m_value = v }.bind(this.info.best)
        })
        this.update()
    }
    Game.prototype.update = function () {
        this.info.score.value = 0
    }
    Game.prototype.restart = function () {
        this.info.score.value = 0
        this.clear()
        this.randGen = new Rand()
        this.matrix = new Matrix(4, 4)
        this.items = new Array(this.matrix.count).fill(null)
        this.generate()
    }
    Game.prototype.generate = function (count = 2) {
        let sum = 0
        for (let i = 0; i < this.matrix.row; i++)
            for (let j = 0; j < this.matrix.col; j++) {
                if (this.matrix.check(i, j)) sum++
            }
        for (let i = 0; i < Math.min(count, this.matrix.row * this.matrix.col - sum); i++) {
            let row, col
            do {
                row = Math.trunc(this.randGen.random(0, 4))
                col = Math.trunc(this.randGen.random(0, 4))
            } while (this.matrix.check(row, col));

            let value = this.randGen.random(0, 1) < 0.9 ? 1 : 2
            if (sum == 0) value = 1
            this.matrix.set(row, col, value)
            const gen = this.createOne(row, col, value)
            this.items[this.matrix.index(row, col)] = gen
            gen.style.opacity = 0
            let it = gen.animate([
                { opacity: `0`, transform: `translate(${col}00%,${row}00%) scale(0)` },
                { opacity: `1`, transform: `translate(${col}00%,${row}00%) scale(1)` }
            ], {
                delay: 100,
                duration: 200,
                fill: "forwards",
                easing: 'ease'
            })
        }
    }
    Game.prototype.createBackground = function () {
        const board = document.querySelector('.backs')
        for (let i = 0; i < this.matrix.row; i++)
            for (let j = 0; j < this.matrix.col; j++) {
                board.innerHTML += `<div class="grid" style="background-color: rgb(216, 216, 216); 
                transform: translate(${j}00%,${i}00%); "></div>`
            }
    }
    Game.prototype.create = function () {
        for (let i = 0; i < this.matrix.row; i++)
            for (let j = 0; j < this.matrix.col; j++) {
                const value = this.matrix.get(i, j)
                if (value && this.items[this.matrix.index(i, j)] == null) this.items[this.matrix.index(i, j)] = this.createOne(i, j, value)
            }
    }
    Game.prototype.createOne = function (row, col, index) {
        const board = document.querySelector('.grids')
        const grid = document.createElement('div')
        const content = document.createElement('span')
        grid.classList.add('grid')
        grid.appendChild(content)
        board.appendChild(grid)
        content.innerHTML = gridStyle[index].text
        content.style.fontSize = `${8 - (gridStyle[index].text.length - 1) * 1}vmin`
        content.style.color = gridStyle[index].color
        grid.style.backgroundColor = gridStyle[index].background
        grid.style.transform = `translate(${col}00%,${row}00%)`
        return grid
    }
    Game.prototype.clear = function (dir) {
        document.querySelector('.grids').innerHTML = ''
        this.items = new Array(this.matrix.count).fill(null)
    }
    Game.prototype.control = function (dir) {
        const varies = this.matrix.merge(dir)

        for (let vary of varies) {
            const last = this.matrix.get(vary.to.row, vary.to.col) == vary.value && vary.type == 1
            const move = this.items[this.matrix.index(vary.from.row, vary.from.col)]
            this.items[this.matrix.index(vary.from.row, vary.from.col)] = null
            const goal = this.items[this.matrix.index(vary.to.row, vary.to.col)]
            if (last) this.items[this.matrix.index(vary.to.row, vary.to.col)] = null
            if (vary.type == 2) this.items[this.matrix.index(vary.to.row, vary.to.col)] = move
            if (vary.type == 1) { this.info.score.value += vary.value; this.info.score.addition = vary.value }
            let anime = move.animate([
                { transform: `translate(${vary.from.col}00%,${vary.from.row}00%)` },
                { transform: `translate(${vary.to.col}00%,${vary.to.row}00%)` }
            ], { duration: 100, fill: "forwards", easing: 'ease-out' }
            )

            if (last) {
                const gen = this.createOne(vary.to.row, vary.to.col, vary.value)
                this.items[this.matrix.index(vary.to.row, vary.to.col)] = gen
                gen.style.opacity = 0
                let anime = gen.animate([
                    { opacity: `0`, transform: `translate(${vary.to.col}00%,${vary.to.row}00%) scale(0)` },
                    { opacity: `1`, transform: `translate(${vary.to.col}00%,${vary.to.row}00%) scale(1)` },
                    { opacity: `1`, transform: `translate(${vary.to.col}00%,${vary.to.row}00%) scale(1.2)` },
                    { opacity: `1`, transform: `translate(${vary.to.col}00%,${vary.to.row}00%) scale(1)` }
                ], {
                    delay: 100,
                    duration: 200,
                    fill: "forwards",
                    easing: 'ease'
                })
                anime.onfinish = function () {
                    goal.parentNode.removeChild(goal)
                }
            }

            anime.onfinish = function () {
                if (vary.type == 1) {
                    move.parentNode.removeChild(move)
                }
            }.bind(this)
        }
        if (varies.length)
            this.generate(1)
    }

    let game = new Game()

    document.body.onkeydown = function (event) {
        const e = event || window.event || arguments.callee.caller.arguments[0]
        const key = e && e.keyCode
        const oper = { 37: 3, 38: 1, 39: 4, 40: 2 }
        if (key in oper) game.control(oper[key])
    }
    document.querySelector('.restart-button').onclick = function () {
        game.restart()
    }



    let startx, starty, movex, movey, endx, endy, nx, ny, angle; 
    let touchstartTime, isMove = false;

    function touchs(event) { 
        event.preventDefault();  
        if (event.type == "touchstart") {     
            isMove = false;     
            let touch = event.touches[0];
            startx = Math.floor(touch.pageX);        
            starty = Math.floor(touch.pageY);        
        } else if (event.type == "touchmove") {    
            isMove = true;
            let touch = event.touches[0];
            movex = Math.floor(touch.pageX);
            movey = Math.floor(touch.pageY);
        } else if (event.type == "touchend" || event.type == "touchcancel") {
            endx = Math.floor(event.changedTouches[0].pageX);       
            endy = Math.floor(event.changedTouches[0].pageY);
            nx = endx - startx;
            ny = endy - starty;
            angle = Math.atan2(ny, nx) * 180 / Math.PI;   
            if (angle < 45 && angle >= -45) {
                game.control(4);
                return false;
            } else if (angle < 135 && angle >= 45) { 
                game.control(2);
                return false;
            } else if ((angle <= 180 && angle >= 135) || (angle >= -180 && angle < -135)) { 
                game.control(3);
                return false;
            } else if (angle <= -45 && angle >= -135) { 
                game.control(1);
                return false;
            }
        }
    }

    document.querySelector('.board').addEventListener('touchstart', touchs, false);
    document.querySelector('.board').addEventListener('touchmove', touchs, false);
    document.querySelector('.board').addEventListener('touchend', touchs, false);

   

            /////////////////////////////////////////////////////////////
            
            // Canvas & Context
            var canvas;
            var ctx;
            
            // Snake
            var snake;
            var snake_dir;
           var snake_next_dir;
            var snake_speed;
            
            // Food
            var food = {x: 0, y: 0};
            
            // Score
            var score;
            
            // Wall
            var wall;
            
            // HTML Elements
            var screen_snake;
            var screen_menu;
            var screen_setting;
            var screen_gameover;
            var button_newgame_menu;
            var button_newgame_setting;
            var button_newgame_gameover;
            var button_setting_menu;
            var button_setting_gameover;
            var ele_score;
            var speed_setting;
            var wall_setting;
            
            /////////////////////////////////////////////////////////////
        
            var activeDot = function(x, y){
                ctx.fillStyle = "#FFFFFF";
                ctx.fillRect(x * 10, y * 10, 10, 10);
            }
            
            
            /////////////////////////////////////////////////////////////
        
            var changeDir = function(key){
                
                if(key == 38 && snake_dir != 2){
                    snake_next_dir = 0;
                }else{
                
                if (key == 39 && snake_dir != 3){
                    snake_next_dir = 1;
                }else{
                
                if (key == 40 && snake_dir != 0){
                    snake_next_dir = 2;
                }else{
                    
                if(key == 37 && snake_dir != 1){
                    snake_next_dir = 3;
                } } } }
                
            }
            
            /////////////////////////////////////////////////////////////
        
            var addFood = function(){
                food.x = Math.floor(Math.random() * ((canvas.width / 10) - 1));
                food.y = Math.floor(Math.random() * ((canvas.height / 10) - 1));
                for(var i = 0; i < snake.length; i++){
                    if(checkBlock(food.x, food.y, snake[i].x, snake[i].y)){
                        addFood();
                    }
                }
            }
            
            /////////////////////////////////////////////////////////////
        
            var checkBlock = function(x, y, _x, _y){
                return (x == _x && y == _y) ? true : false;
            }
            
            /////////////////////////////////////////////////////////////
            
            var altScore = function(score_val){
                ele_score.innerHTML = String(score_val);
            }
            
            /////////////////////////////////////////////////////////////
        
            var mainLoop = function(){
                
                    var _x = snake[0].x;
                    var _y = snake[0].y;
              snake_dir = snake_next_dir;
        
                    // 0 - Up, 1 - Right, 2 - Down, 3 - Left
                    switch(snake_dir){
                        case 0: _y--; break;
                        case 1: _x++; break;
                        case 2: _y++; break;
                        case 3: _x--; break;
                    }
        
                    snake.pop();
                    snake.unshift({x: _x, y: _y});
        
                
                // --------------------
        
                // Wall
                
                    if(wall == 1){
                    // On
                        if (snake[0].x < 0 || snake[0].x == canvas.width / 10 || snake[0].y < 0 || snake[0].y == canvas.height / 10){
                            showScreen(3);
                            return;
                        }
                    }else{
                    // Off
                        for(var i = 0, x = snake.length; i < x; i++){
                            if(snake[i].x < 0){
                                snake[i].x = snake[i].x + (canvas.width / 10);
                            }
                            if(snake[i].x == canvas.width / 10){
                                snake[i].x = snake[i].x - (canvas.width / 10);
                            }
                            if(snake[i].y < 0){
                                snake[i].y = snake[i].y + (canvas.height / 10);
                            }
                            if(snake[i].y == canvas.height / 10){
                                snake[i].y = snake[i].y - (canvas.height / 10);
                            }
                        }
                    }
                
                // --------------------
            
                // Autophagy death
                    for(var i = 1; i < snake.length; i++){
                        if (snake[0].x == snake[i].x && snake[0].y == snake[i].y){
                            showScreen(3);
                            return;
                        }
                    }
              
                // --------------------
                
              // Eat Food
                    if(checkBlock(snake[0].x, snake[0].y, food.x, food.y)){
                        snake[snake.length] = {x: snake[0].x, y: snake[0].y};
                        score += 1;
                        altScore(score);
                        addFood();
                        activeDot(food.x, food.y);
                    }
                
                // --------------------
        
                    ctx.beginPath();
                    ctx.fillStyle = "#000000";
                    ctx.fillRect(0, 0, canvas.width, canvas.height);
                
                // --------------------
        
                    for(var i = 0; i < snake.length; i++){
                        activeDot(snake[i].x, snake[i].y);
                    }
                
                // --------------------
        
                    activeDot(food.x, food.y);
                
            // Debug
            //document.getElementById("debug").innerHTML = snake_dir + " " + snake_next_dir + " " + snake[0].x + " " + snake[0].y;    
        
                    setTimeout(mainLoop, snake_speed);
            }
            
            /////////////////////////////////////////////////////////////
        
            var newGame = function(){
                
                showScreen(0);
                screen_snake.focus();
              
                snake = [];
                for(var i = 4; i >= 0; i--){
                    snake.push({x: i, y: 15});
                }
              
                snake_next_dir = 1;
                
                score = 0;
                altScore(score);
                
                addFood();
                
                canvas.onkeydown = function(evt) {
                    evt = evt || window.event;
                    changeDir(evt.keyCode);
                }
                mainLoop();
                        
            }
            
            /////////////////////////////////////////////////////////////
            
            // Change the snake speed...
            // 150 = slow
            // 100 = normal
            // 50 = fast
            var setSnakeSpeed = function(speed_value){
                snake_speed = speed_value;
            }
            
            /////////////////////////////////////////////////////////////
            var setWall = function(wall_value){
                wall = wall_value;
                if(wall == 0){screen_snake.style.borderColor = "#606060";}
                if(wall == 1){screen_snake.style.borderColor = "#FFFFFF";}
            }
             
            /////////////////////////////////////////////////////////////
            
            // 0 for the game
            // 1 for the main menu
            // 2 for the settings screen
            // 3 for the game over screen
            var showScreen = function(screen_opt){
                switch(screen_opt){
                        
                    case 0:  screen_snake.style.display = "block";
                             screen_menu.style.display = "none";
                             screen_setting.style.display = "none";
                             screen_gameover.style.display = "none";
                             break;
                        
                    case 1:  screen_snake.style.display = "none";
                             screen_menu.style.display = "block";
                             screen_setting.style.display = "none";
                             screen_gameover.style.display = "none";
                             break;
                        
                    case 2:  screen_snake.style.display = "none";
                             screen_menu.style.display = "none";
                             screen_setting.style.display = "block";
                             screen_gameover.style.display = "none";
                             break;
                        
                    case 3: screen_snake.style.display = "none";
                            screen_menu.style.display = "none";
                            screen_setting.style.display = "none";
                            screen_gameover.style.display = "block";
                            break;
                }
            }
                
            /////////////////////////////////////////////////////////////
                
            window.onload = function(){
                
                canvas = document.getElementById("snake");
                ctx = canvas.getContext("2d");
                       
                    // Screens
                    screen_snake = document.getElementById("snake");
                    screen_menu = document.getElementById("menu");
                    screen_gameover = document.getElementById("gameover");
                    screen_setting = document.getElementById("setting");
                
                    // Buttons
                    button_newgame_menu = document.getElementById("newgame_menu");
                    button_newgame_setting = document.getElementById("newgame_setting");
                    button_newgame_gameover = document.getElementById("newgame_gameover");
                    button_setting_menu = document.getElementById("setting_menu");
                    button_setting_gameover = document.getElementById("setting_gameover");
                
                    // etc
                    ele_score = document.getElementById("score_value");
                    speed_setting = document.getElementsByName("speed");
                    wall_setting = document.getElementsByName("wall");
                
                // --------------------
        
                $(document).on("click", ".back", function () {
                    showScreen(1);
               });
          
                button_newgame_menu.onclick = function(){newGame();};
                button_newgame_gameover.onclick = function(){newGame();}; 
                button_newgame_setting.onclick = function(){newGame();}; 
                button_setting_menu.onclick = function(){showScreen(2);};
                button_setting_gameover.onclick = function(){showScreen(2)};
        
                setSnakeSpeed(150);
                setWall(1);
        
                showScreen("menu");
                
                // --------------------
                // Settings
                
                    // speed
                    for(var i = 0; i < speed_setting.length; i++){
                        speed_setting[i].addEventListener("click", function(){
                            for(var i = 0; i < speed_setting.length; i++){
                                if(speed_setting[i].checked){
                                    setSnakeSpeed(speed_setting[i].value);
                                }
                            }
                        });
                    }
                
                    // wall
                    for(var i = 0; i < wall_setting.length; i++){
                        wall_setting[i].addEventListener("click", function(){
                            for(var i = 0; i < wall_setting.length; i++){
                                if(wall_setting[i].checked){
                                    setWall(wall_setting[i].value);
                                }
                            }
                        });
                    }
        
                document.onkeydown = function(evt){
                    if(screen_gameover.style.display == "block"){
                        evt = evt || window.event;
                        if(evt.keyCode == 32){
                            newGame();
                        }
                    }
                }
            }      

})