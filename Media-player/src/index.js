const { ipcRenderer } = require('electron')
const path = require('path')
const url = require('url')
const trash = require('trash')
const fs = require('fs')

// // Create oject to handle UI
// class UI_C {
//     constructor() {
//         this.Elem = document.getElementById('ui_cnt')
//         this.Min_Height = 68
//         this.Min_Width = 600
//         ipcRenderer.on('set_fullscreen', (e, state) => {
//             this.Set_Fullscreen(state)
//         })
//     }
//
//     get Height() {
//         if (window.innerHeight == screen.height - 20 && window.innerWidth == screen.width) {
//             return 0
//         } else {
//             return this.Min_Height
//         }
//     }
//
//     Set_Fullscreen(state) {
//         if (state) {
//             this.Elem.classList.add('hide')
//         } else {
//             this.Elem.classList.remove('hide')
//         }
//     }
// }
// var UI = new UI_C
//
// // Create object to handle file
// class File_C {
//
//     constructor() {
//         this.Opened = false
//         this.Shuffling = false
//         this.Video_Formats = [
//             '.mp4',
//             '.webm',
//             '.ogg'
//         ]
//         this.Audio_Formats = [
//             '.mp3',
//             '.wav',
//             '.ogg',
//             '.flac'
//         ]
//         this.Type_List = Object.freeze({
//             Video: 1,
//             Audio: 2
//         })
//     }
//
//     // Open file and store data
//     Open(file_path) {
//         if (file_path === undefined) {
//             return
//         }
//         this.Ext = path.extname(file_path.toLowerCase())
//         if (this.Video_Formats.includes(this.Ext)) {
//             this.Type = this.Type_List.Video
//         } else if (this.Audio_Formats.includes(this.Ext)) {
//             this.Type = this.Type_List.Audio
//         } else {
//             return
//         }
//         this.Opened = true
//         this.Dir = path.dirname(file_path)
//         this.Name = path.basename(file_path)
//         this.Index = this.List.indexOf(this.Name)
//         document.getElementById('title').innerHTML = this.Name
//
//         // Load the media
//         if (this.Type === this.Type_List.Video) {
//             Media.Load_Video(file_path)
//         } else {
//             Media.Load_Audio(file_path)
//         }
//     }
//
//     // Get the file path
//     get Path() {
//         if (!this.Opened) {
//             return
//         }
//         return path.join(this.Dir, this.Name)
//     }
//
//     get List() {
//         if (!this.Opened) {
//             return
//         }
//         let file_list = fs.readdirSync(this.Dir).filter((file) => {
//             return this.Video_Formats.includes(this.Ext) || this.Audio_Formats.includes(this.Ext)
//         })
//         return file_list
//     }
//
//     Delete() {
//         if (!this.Opened) {
//             return
//         }
//         let cur_file = path.basename(Media.Elem.src)
//         if (cur_file === this.Name) {
//             trash(File.Path).then(() => {
//                 this.Open(this.Get(0, false))
//             })
//         }
//     }
//
//     // Get file path from a list of files at an increment from the current file path
//     Get(increment, wrap) {
//         // Return if a file has not been opened
//         if (!this.Opened) {
//             return
//         }
//         if (this.Shuffling) {
//             increment = Math.floor(Math.random() * this.List.length)
//             wrap = true
//         }
//         let list = this.List
//         if (list.length < 1) {
//             return
//         }
//         let dir = this.Dir
//         let ind = this.Index + increment
//
//         if (wrap) {
//             // Wrap index for array
//             ind = ((ind % list.length) + list.length) % list.length;
//         } else {
//             // Limit to file list
//             ind = ind < 0 ? 0 : ind >= list.length ? list.length - 1 : ind
//         }
//         return path.join(dir, list[ind])
//     }
//
//     Shuffle() {
//         if (!this.Opened) {
//             return
//         }
//         if (this.Shuffling) {
//             this.Shuffling = false;
//             document.getElementById('shuffle_btn').classList.remove('toggled');
//         } else {
//             this.Shuffling = true;
//             document.getElementById('shuffle_btn').classList.add('toggled');
//         }
//     }
// }
// //File_C class ends here
//
// var File = new File_C
//
// class Media_C {
//
//     constructor() {
//         this.Loaded = false
//         this.Looping = false
//         this.Speed = 1
//         this.Audio_Elem = document.getElementById('audio')
//         this.Video_Elem = document.getElementById('video')
//         this.Video_Elem.addEventListener("loadedmetadata", (e) => {
//             this.Resize_Window()
//             this.Resize_Video()
//         })
//     }
//
//     Resize_Window() {
//         let window_width = window.innerWidth
//         let window_height = window.innerHeight
//         let ratio = this.Video_Elem.videoWidth / this.Video_Elem.videoHeight
//         let width = window_width
//         let height = width / ratio
//         if (window_height < height + UI.Height) {
//             ipcRenderer.send('resize_window', width, height + UI.Height)
//         }
//     }
//
//     Resize_Video() {
//         let window_width = window.innerWidth
//         let window_height = window.innerHeight
//         let ratio = this.Video_Elem.videoWidth / this.Video_Elem.videoHeight
//         let width = window_width
//         let height = width / ratio
//         if (window_height < height + UI.Height) {
//             height = window_height - UI.Height
//             width = height * ratio
//         }
//         this.Video_Elem.width = width
//         this.Video_Elem.height = height
//         this.Video_Elem.style.transform = 'translate(' + ((window_width - width) / 2) + 'px,' + ((window_height - height - UI.Height) / 2) + 'px)'
//     }
//
//     Load_Video(file_path) {
//         this.Audio_Elem.src = ''
//         this.Elem = this.Video_Elem
//         this.Elem.src = file_path
//         this.Init()
//     }
//
//     Load_Audio(file_path) {
//         this.Video_Elem.src = ''
//         this.Video_Elem.width = 0
//         this.Video_Elem.height = 0
//         this.Elem = this.Audio_Elem
//         this.Elem.src = file_path
//         ipcRenderer.send('resize_window', window.innerWidth, 0)
//         this.Init()
//     }
//
//     Init() {
//         this.Loaded = true
//         this.Set_Speed(this.Speed)
//         this.Play()
//     }
//
//     Time_Update() {
//         if (!this.Loaded || !this.Elem.duration) {
//             return
//         }
//         if (this.Elem.currentTime === this.Elem.duration) {
//             if (this.Looping) {
//                 this.Seek_Percent(0)
//                 this.Play()
//             } else {
//                 this.Stop()
//             }
//         } else {
//             Time.Set(this.Elem.currentTime, this.Elem.duration)
//             Seek_Bar.Set(this.Elem.currentTime / this.Elem.duration * 100)
//         }
//     }
//
//     get Playing() {
//         if (!this.Loaded) {
//             return
//         }
//         return !this.Elem.paused
//     }
//
//     Loop() {
//         if (!this.Loaded) {
//             return
//         }
//         if (this.Looping) {
//             this.Looping = false
//             document.getElementById('loop_btn').classList.remove('toggled')
//         } else {
//             this.Looping = true
//             document.getElementById('loop_btn').classList.add('toggled')
//         }
//     }
//
//     Play() {
//         if (!this.Loaded) {
//             return
//         }
//         this.Elem.play()
//         document.getElementById('play_pause_btn').style.setProperty('background-image', 'url(../assets/ui/pause_btn.svg)')
//     }
//
//     Pause() {
//         if (!this.Loaded) {
//             return
//         }
//         this.Elem.pause()
//         document.getElementById('play_pause_btn').style.setProperty('background-image', 'url(../assets/ui/play_btn.svg)')
//     }
//
//     Play_Pause() {
//         if (!this.Loaded) {
//             return
//         }
//         if (this.Playing) {
//             this.Pause()
//         } else {
//             this.Play()
//         }
//     }
//
//     Stop() {
//         if (!this.Loaded) {
//             return
//         }
//         this.Pause()
//         this.Elem.currentTime = 0
//         Seek_Bar.Set(0)
//     }
//
//     Seek_Percent(percent) {
//         if (!this.Loaded) {
//             return
//         }
//         percent = percent < 0 ? 0 : percent > 100 ? 100 : percent
//
//         this.Elem.currentTime = percent / 100 * this.Elem.duration
//     }
//
//     Previous() {
//         if (this.Elem.currentTime > 3) {
//             this.Seek_Percent(0)
//         } else {
//             File.Open(File.Get(-1))
//         }
//     }
//
//     Seek(direction, increment) {
//         if (!this.Loaded) {
//             return
//         }
//         direction = Math.sign(direction)
//
//         if (increment === undefined) {
//             increment = 2
//         }
//
//         let current_time = this.Elem.currentTime
//         let duration = this.Elem.duration
//         let new_time = current_time + direction * increment
//
//         new_time = new_time < 0 ? 0 : new_time > duration ? duration : new_time
//
//         this.Elem.currentTime = new_time;
//     }
//
//     Set_Speed(rate) {
//         this.Speed = rate
//         if (!this.Loaded) {
//             return
//         }
//         this.Elem.playbackRate = rate
//     }
// }
//
// //Class Media_C ends here
//
// var Media = new Media_C
//
// class Seek_Bar_C {
//
//     constructor() {
//         this.Elem = document.getElementById('seek_bar')
//         this.Set(0)
//         this.Elem.addEventListener('focus', () => {
//             this.Elem.blur() // Prevent focus that takes keybaord input
//         })
//         this.Elem.addEventListener('input', () => {
//             Media.Seek_Percent(this.Elem.value)
//         })
//     }
//
//     Set(percent) {
//         // Limit val between 0 and 1
//         percent = percent < 0 ? 0 : percent > 100 ? 100 : percent
//         percent = Math.round(percent * 10) / 10
//         this.Elem.style.setProperty('background', 'linear-gradient(to right, red ' + percent + '%, black ' + percent + '%')
//         this.Elem.value = percent
//     }
// }
// var Seek_Bar = new Seek_Bar_C
//
// class Time_C {
//     constructor() {
//         this.Elem = document.getElementById('time')
//     }
//
//     Set(seconds, duration) {
//         let date = new Date(null)
//         date.setSeconds(seconds)
//         let time = date.toLocaleTimeString().substr(3, 5)
//         date = new Date(null)
//         date.setSeconds(duration)
//         duration = date.toLocaleTimeString().substr(3, 5)
//         this.Elem.innerHTML = time + '/' + duration
//     }
// }
//
// //Class Time_C ends here
//
// var Time = new Time_C
//
// // Handle Speed changes
// let speed_btn = document.getElementById('speed_btn')
// let speed_list = document.getElementById('speed_list')
// speed_btn.addEventListener('click', () => {
//     speed_list.classList.toggle('show')
// })
// Array.from(speed_list.children).forEach((child) => {
//     child.addEventListener('click', () => {
//         Media.Set_Speed(child.innerHTML)
//         let temp = child.innerHTML
//         child.innerHTML = speed_btn.innerHTML
//         speed_btn.innerHTML = temp
//     })
// });
// document.addEventListener('click', (e) => {
//     if (!e.target.matches('#speed_btn')) {
//         speed_list.classList.remove('show')
//     }
// })
//
// // Set UI size on start
// document.getElementById('ui_cnt').style.height = (UI.Min_Height - 2) + 'px'
// ipcRenderer.send('init_size', UI.Min_Width, UI.Min_Height)
//
// // Handle window resize
// window.addEventListener('resize', () => { Media.Resize_Video() })
//
// // Handle video resize
// ipcRenderer.on('resize_video', () => { Media.Resize_Video() })
//
//
// // Handle time update
// Media.Audio_Elem.addEventListener('timeupdate', () => { Media.Time_Update() })
// Media.Video_Elem.addEventListener('timeupdate', () => { Media.Time_Update() })
//
// // Handle drag and drop
// document.addEventListener('dragover', (e) => {
//     e.preventDefault();
// })
// document.addEventListener('drop', (e) => {
//     e.preventDefault();
//     let file = e.dataTransfer.files[0]
//     if (file !== undefined) {
//         File.Open(file.path)
//     }
// })
//
// // Add button shortcuts
// document.getElementById('shuffle_btn').addEventListener('click', (e) => {
//     File.Shuffle();
// })
// document.getElementById('previous_btn').addEventListener('click', (e) => {
//     Media.Previous();
// })
// document.getElementById('play_pause_btn').addEventListener('click', (e) => {
//     Media.Play_Pause()
// })
// document.getElementById('next_btn').addEventListener('click', (e) => {
//     File.Open(File.Get(+1))
// })
// document.getElementById('loop_btn').addEventListener('click', (e) => {
//     Media.Loop()
// })
//
// // Handle main process events
// ipcRenderer.on("open", (e, file_path) => {
//     File.Open(file_path)
// })
// ipcRenderer.on("next", (e) => {
//     File.Open(File.Get(+1))
// })
// ipcRenderer.on("previous", (e, file_path) => {
//     Media.Previous()
// })
// ipcRenderer.on("play_pause", (e) => {
//     Media.Play_Pause()
// })
// ipcRenderer.on("seek_plus", (e) => {
//     Media.Seek(+1)
// })
// ipcRenderer.on("seek_minus", (e) => {
//     Media.Seek(-1)
// })
// ipcRenderer.on("shuffle", (e) => {
//     File.Shuffle()
// })
// ipcRenderer.on("loop", (e) => {
//     Media.Loop()
// })


// Button binding
// document.getElementById('always_on_top_btn').addEventListener('clicked',()=>{
//   getData();
// })

function getData(){
  document.getElementById('always_on_top_btn').classList.remove('always_on_top_btn').add('pressed_top');
}

$('#always_on_top_btn').on({
 click: function(){
     console.log("Hello"); // changes background on click
 },
 mousedown: function() {
     // :active state
 },
 mouseup: function() {
     // on click release
 },
 mouseenter: function() {
     // on hover
 },
 mouseleave: function() {
     // hover exit
 }
 /*
   , hover: function(){
        // or hover instead of enter/leave
     }
 */
})
