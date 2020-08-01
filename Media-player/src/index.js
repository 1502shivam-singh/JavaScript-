// ﻿const { ipcRenderer } = require('electron')
// const path = require('path')
// const url = require('url')
// const trash = require('trash')
// const fs = require('fs')


//Code for titlebar of mainwindow (start)

(function () {
    // Retrieve remote BrowserWindow
    const {BrowserWindow} = require('electron').remote

    function init() {
        // Minimize task
        $('#min-btn').on({
          click: function(){
                  var window = BrowserWindow.getFocusedWindow();
                  window.minimize();
          },
          mousedown: function() {
            document.getElementById("min-btn").style.backgroundImage = "url(../assets/ui/header_min_bl_03.png)";
            setTimeout(function(){document.getElementById("min-btn").style.backgroundImage = "url(../assets/ui/header_min_bl_01.png)";},100);
              }
            })
            $("#min-btn").hover(function(){
              document.getElementById("min-btn").style.backgroundImage = "url(../assets/ui/header_min_bl_02.png)";}
              ,function(){
              document.getElementById("min-btn").style.backgroundImage = "";
             })
        // Maximize window
        $('#max-btn').on({
          click: function(){
                var window = BrowserWindow.getFocusedWindow();
                if(window.isMaximized()){
                    window.unmaximize();
                }else{
                    window.maximize();
                }
          },
          mousedown: function() {
            document.getElementById("max-btn").style.backgroundImage = "url(../assets/ui/header_full_bl_03.png)";
            setTimeout(function(){document.getElementById("max-btn").style.backgroundImage = "url(../assets/ui/header_full_bl_01.png)";},100);
              }
            })
            $("#max-btn").hover(function(){
              document.getElementById("max-btn").style.backgroundImage = "url(../assets/ui/header_full_bl_02.png)";}
              ,function(){
              document.getElementById("max-btn").style.backgroundImage = "";
             })
        // Close app
        $('#close-btn').on({
          click: function(){
                var window = BrowserWindow.getFocusedWindow();
                window.close();
          },
          mousedown: function() {
            document.getElementById("close-btn").style.backgroundImage = "url(../assets/ui/header_close_bl_03.png)";
            setTimeout(function(){document.getElementById("close-btn").style.backgroundImage = "url(../assets/ui/header_close_bl_01.png)";},100);
              }
            })
            $("#close-btn").hover(function(){
              document.getElementById("close-btn").style.backgroundImage = "url(../assets/ui/header_close_bl_02.png)";}
              ,function(){
              document.getElementById("close-btn").style.backgroundImage = "";
             })


            //On mini Player
            $('#min-btn-m').on({
              click: function(){
                      var window = BrowserWindow.getFocusedWindow();
                      window.minimize();
              },
              mousedown: function() {
                document.getElementById("min-btn-m").style.backgroundImage = "url(../assets/ui/header_min_bl_03.png)";
                setTimeout(function(){document.getElementById("min-btn-m").style.backgroundImage = "url(../assets/ui/header_min_bl_01.png)";},100);
                  }
                })
                $("#min-btn-m").hover(function(){
                  document.getElementById("min-btn-m").style.backgroundImage = "url(../assets/ui/header_min_bl_02.png)";}
                  ,function(){
                  document.getElementById("min-btn-m").style.backgroundImage = "";
                 })
            // Maximize window
            $('#max-btn-m').on({
              click: function(){
                    var window = BrowserWindow.getFocusedWindow();
                    if(window.isMaximized()){
                        window.unmaximize();
                    }else{
                        window.maximize();
                    }
              },
              mousedown: function() {
                document.getElementById("max-btn-m").style.backgroundImage = "url(../assets/ui/header_full_bl_03.png)";
                setTimeout(function(){document.getElementById("max-btn-m").style.backgroundImage = "url(../assets/ui/header_full_bl_01.png)";},100);
                  }
                })
                $("#max-btn-m").hover(function(){
                  document.getElementById("max-btn-m").style.backgroundImage = "url(../assets/ui/header_full_bl_02.png)";}
                  ,function(){
                  document.getElementById("max-btn-m").style.backgroundImage = "";
                 })
            // Close app
            $('#close-btn-m').on({
              click: function(){
                    var window = BrowserWindow.getFocusedWindow();
                    window.close();
              },
              mousedown: function() {
                document.getElementById("close-btn-m").style.backgroundImage = "url(../assets/ui/header_close_bl_03.png)";
                setTimeout(function(){document.getElementById("close-btn-m").style.backgroundImage = "url(../assets/ui/header_close_bl_01.png)";},100);
                  }
                })
                $("#close-btn-m").hover(function(){
                  document.getElementById("close-btn-m").style.backgroundImage = "url(../assets/ui/header_close_bl_02.png)";}
                  ,function(){
                  document.getElementById("close-btn-m").style.backgroundImage = "";
                 })
    };
    document.onreadystatechange =  () => {
        if (document.readyState == "complete") {
            init();
        }
    };
})();
//Code for titlebar of mainwindow (end)

var digit = 1;

$('#pause_btn').on({
  click: function(){
    if(digit === 1)
      //document.querySelector("#pause_btn").style.backgroundImage == "")
    {
      console.log(digit);
      document.querySelector("#pause_btn").style.backgroundImage = "url(../assets/ui/playing_bl_01.png)";

    }
    else{
      console.log(digit);
      console.log(document.querySelector("#pause_btn").style.backgroundImage);
      document.querySelector("#pause_btn").style.backgroundImage = "";
    }
  },
  mousedown: function() {
  // :active state
  if(digit === 1)
    //document.querySelector("#pause_btn").style.backgroundImage == "")
  {
    //setTimeout(function(){document.getElementById("pause_btn").style.backgroundImage = "url(../assets/ui/playing_bl_03.png)";},50);
    document.querySelector("#pause_btn").style.backgroundImage = "url(../assets/ui/playing_bl_03.png)";
    setTimeout(function(){document.querySelector("#pause_btn").style.backgroundImage = "url(../assets/ui/playing_bl_01.png)";},100);
    //digit = 1;
    console.log(digit);
    digit = 2;
  }
  else{
    //setTimeout(function(){document.getElementById("pause_btn").style.backgroundImage = "url(../assets/ui/pausing_bl_03.png)";},50);
    document.querySelector("#pause_btn").style.backgroundImage = "url(../assets/ui/pausing_bl_03.png)";
    setTimeout(function(){document.querySelector("#pause_btn").style.backgroundImage = "";},100);
    //digit = 2;
    console.log(digit);
    digit = 1;
    }
  },
})

$("#pause_btn").bind('mouseover', function() {
    //var old_color = $(this).css("background-color");
    if(digit === 1){
    $(this)[0].style.backgroundImage = 'url(../assets/ui/pausing_bl_02.png)';
  }
  else {
    $(this)[0].style.backgroundImage = 'url(../assets/ui/playing_bl_02.png)';
  }
    $("#pause_btn").bind('mouseout', function () {
      if(digit === 1){
        $(this)[0].style.backgroundImage = "url(../assets/ui/pausing_bl_01.png)";}
        else {
          $(this)[0].style.backgroundImage = 'url(../assets/ui/playing_bl_01.png)';
        }
      });
});

//Code of pause/play button (end)


//Code of playback button (start)
$('#playback_btn').on({
  click: function(){
    //API endpoint for playback_btn
  },
  mousedown: function() {
    document.getElementById("playback_btn").style.backgroundImage = "url(../assets/ui/playback_bl_03.png)";
    setTimeout(function(){document.getElementById("playback_btn").style.backgroundImage = "url(../assets/ui/playback_bl_01.png)";},100);
  },
  })
  $("#playback_btn").hover(function(){
    document.getElementById("playback_btn").style.backgroundImage = "url(../assets/ui/playback_bl_02.png)";}
    ,function(){
    document.getElementById("playback_btn").style.backgroundImage = "";
})
//Code of playback button (end)


//Code of always_on_top_btn button (start)
$('#always_on_top_btn').on({
  click: function(){
    if(document.getElementById("always_on_top_btn").style.backgroundImage == "")
    {
      document.getElementById("always_on_top_btn").style.backgroundImage = "url(../assets/ui/always_on_top_active_bl_03.png)";
    }
    else{
      document.getElementById("always_on_top_btn").style.backgroundImage = "";
    }
      //API endpoint for always_on_top_btn
  }
});

//Code of always_on_top_btn button (end)


//Code of next_btn button (start)
var digit_next = 1;

$('#next_btn').on({
  click: function(){
    var x = document.getElementById("title-bar");
    if (x.style.display === "none") {
      x.style.display = "flex";
      $("#ui_cnt").css("height","95px");
      $("#ui_cnt").css("background","black");
      $(".bottom-bar").css("display","flex");
      $("#left-ext-m").css("display","none");
      $("#right-ext-m").css("display","none");

      $(".left_buttons").css("display","block");
      $(".volume-bar").css("height","");
      $("#sound").css("display","inline-block");
      $("#snapshot").css("display","inline-block");
      $("#sync_button").css("display","inline-block");
      $("#title-bar-btns-m").css("display","none");
      $("#min-btn-m").css("display","none");
      $("#max-btn-m").css("display","none");
      $("#close-btn-m").css("display","none");

    } else {
      x.style.display = "none";
      $("#ui_cnt").css("height","81px");
      $("#ui_cnt").css("background","rgba(0, 0, 0, 0.3)");
      $(".bottom-bar").css("display","none");
      $("#left-ext-m").css("display","flex");
      $("#right-ext-m").css("display","flex");

      $(".left_buttons").css("display","-webkit-inline-box");
      $(".volume-bar").css("height","20px");
      $("#sound").css("display","none");
      $("#snapshot").css("display","none");
      $("#sync_button").css("display","none");
      $("#title-bar-btns-m").css("display","flex");
      $("#min-btn-m").css("display","flex");
      $("#max-btn-m").css("display","flex");
      $("#close-btn-m").css("display","flex");

    }
    if(digit_next === 1)
      //document.querySelector("#pause_btn").style.backgroundImage == "")
    {
      console.log(digit_next);
      document.querySelector("#next_btn").style.backgroundImage = "url(../assets/ui/mini_player_bl_01.png)";
    }
    else{
      console.log(digit_next);
      console.log(document.querySelector("#next_btn").style.backgroundImage);
      document.querySelector("#next_btn").style.backgroundImage = "";
    }

    //Edited ends here

      //API endpoint for next_btn
  },
  mousedown: function() {

        //Edited starts here
        if(digit_next === 1)
        {
          //setTimeout(function(){document.getElementById("pause_btn").style.backgroundImage = "url(../assets/ui/playing_bl_03.png)";},50);
          document.querySelector("#next_btn").style.backgroundImage = "url(../assets/ui/mini_player_bl_03.png)";
          setTimeout(function(){document.querySelector("#next_btn").style.backgroundImage = "url(../assets/ui/mini_player_bl_01.png)";},100);
          //digit = 1;
          console.log(digit_next);
          digit_next = 2;
        }
        else{
          //setTimeout(function(){document.getElementById("pause_btn").style.backgroundImage = "url(../assets/ui/pausing_bl_03.png)";},50);
          document.querySelector("#next_btn").style.backgroundImage = "url(../assets/ui/standard_player_bl_03.png)";
          setTimeout(function(){document.querySelector("#next_btn").style.backgroundImage = "";},100);
          //digit = 2;
          console.log(digit_next);
          digit_next = 1;
          }
        //Edited ends here
    }
  })

  $("#next_btn").bind('mouseover', function() {
      //var old_color = $(this).css("background-color");
      if(digit_next === 1){
      $(this)[0].style.backgroundImage = 'url(../assets/ui/standard_player_bl_02.png)';
    }
    else {
      $(this)[0].style.backgroundImage = 'url(../assets/ui/mini_player_bl_02.png)';
    }
      $("#next_btn").bind('mouseout', function () {
        if(digit_next === 1){
          $(this)[0].style.backgroundImage = "url(../assets/ui/standard_player_bl_01.png)";}
          else {
            $(this)[0].style.backgroundImage = 'url(../assets/ui/mini_player_bl_01.png)';
          }
        });
  });


//Code of next_btn button (end)



//Code of loop_btn button (start)
$('#loop_btn').on({
  click: function(){
      //API endpoint for loop_btn
  },
  mousedown: function() {
    document.getElementById("loop_btn").style.backgroundImage = "url(../assets/ui/sync_target_bl_03.png)";
    setTimeout(function(){document.getElementById("loop_btn").style.backgroundImage = "url(../assets/ui/sync_target_bl_01.png)";},100);
      }
    })
    $("#loop_btn").hover(function(){
      document.getElementById("loop_btn").style.backgroundImage = "url(../assets/ui/sync_target_bl_02.png)";}
      ,function(){
      document.getElementById("loop_btn").style.backgroundImage = "";
})
//Code of loop_btn button (start)


//Code of sync_button button (start)
if(true){    //Case-1 when sync not detecting timer
  $('#sync_button').on({
    click: function(){
        //API endpoint for sync_button
    },
    mousedown: function() {
      document.getElementById("sync_button").style.backgroundImage = "url(../assets/ui/sync_deactive_bl_03.png)";
      setTimeout(function(){document.getElementById("sync_button").style.backgroundImage = "url(../assets/ui/sync_deactive_bl_01.png)";},100);
        }
      })
      $("#sync_button").hover(function(){
        document.getElementById("sync_button").style.backgroundImage = "url(../assets/ui/sync_deactive_bl_02.png)";}
        ,function(){
        document.getElementById("sync_button").style.backgroundImage = "";
       })
}
else if (false) { //Case-2 when sync detecting/pausing the timer
  $('#sync_button').on({
    click: function(){
        //API endpoint for sync_button
    },
    mousedown: function() {
      document.getElementById("sync_button").style.backgroundImage = "url(../assets/ui/sync_active_bl_03.png)";
      setTimeout(function(){document.getElementById("sync_button").style.backgroundImage = "url(../assets/ui/sync_active_bl_01.png)";},100);
        }
      })
      $("#sync_button").hover(function(){
        document.getElementById("sync_button").style.backgroundImage = "url(../assets/ui/sync_active_bl_02.png)";}
        ,function(){
        document.getElementById("sync_button").style.backgroundImage = "";
       })
}
else {  //Case-3 when syncing the timer
  $('#sync_button').on({
    click: function(){
        //API endpoint for sync_button
    },
    mousedown: function() {
      document.getElementById("sync_button").style.backgroundImage = "url(../assets/ui/sync_sync_bl_03.png)";
      setTimeout(function(){document.getElementById("sync_button").style.backgroundImage = "url(../assets/ui/sync_sync_bl_01.png)";},100);
        }
      })
      $("#sync_button").hover(function(){
        document.getElementById("sync_button").style.backgroundImage = "url(../assets/ui/sync_sync_bl_02.png)";}
        ,function(){
        document.getElementById("sync_button").style.backgroundImage = "";
       })
}
//Code of sync_button button (end)


//Code of snapshot button (start)
$('#snapshot').on({
  click: function(){
      //API endpoint for snapshot
  },
  mousedown: function() {
    document.getElementById("snapshot").style.backgroundImage = "url(../assets/ui/snapshot_bl_03.png)";
    setTimeout(function(){document.getElementById("snapshot").style.backgroundImage = "url(../assets/ui/snapshot_bl_01.png)";},100);
      }
    })
    $("#snapshot").hover(function(){
      document.getElementById("snapshot").style.backgroundImage = "url(../assets/ui/snapshot_bl_02.png)";}
      ,function(){
      document.getElementById("snapshot").style.backgroundImage = "";
})
//Code of snapshot button (end)


//Code of videosetting button (start)
$('#videosetting').on({
  click: function(){
      //API endpoint for vidosetting
  },
  mousedown: function() {
    document.getElementById("videosetting").style.backgroundImage = "url(../assets/ui/video_setting_bl_03.png)";
    setTimeout(function(){document.getElementById("videosetting").style.backgroundImage = "url(../assets/ui/video_setting_bl_01.png)";},100);
      }
    })
    $("#videosetting").hover(function(){
      document.getElementById("videosetting").style.backgroundImage = "url(../assets/ui/video_setting_bl_02.png)";}
      ,function(){
      document.getElementById("videosetting").style.backgroundImage = "";
})
//Code of videosetting button (end)


//Code of preference button (start)
$('#preference').on({
  click: function(){
      //API endpoint for preference
      //Retrieve remote BrowserWindow
      const {BrowserWindow} = require('electron').remote
      const path = require('path')
      const url = require('url')

      pref_win = new BrowserWindow({
        //parent: win,
        //modal: true,
        minWidth: 685,
        width: 685,
        height: 368,
        minHeight: 368,
          frame:false,
          transparent: true,
          show: true, // Show and maximize later
          icon: path.join(__dirname, 'assets', 'icons', 'main_icon.ico'),
          resizable: false,
          transparent: true,
      })

      pref_win.loadURL(url.format({
          pathname: path.join(__dirname, 'pref.html'),
          protocol: 'file:',
          slashes: true,
      }))

      //pref_win.webContents.openDevTools()
  },
  mousedown: function() {
    document.getElementById("preference").style.backgroundImage = "url(../assets/ui/preferences_bl_03.png)";
    setTimeout(function(){document.getElementById("preference").style.backgroundImage = "url(../assets/ui/preferences_bl_01.png)";},100);
      }
    })
    $("#preference").hover(function(){
      document.getElementById("preference").style.backgroundImage = "url(../assets/ui/preferences_bl_02.png)";}
      ,function(){
      document.getElementById("preference").style.backgroundImage = "";
})
//Code of preference button (end)


//Code of quality button (start)
$('#quality').on({
  click: function(){
      //API endpoint for quality
      const {BrowserWindow} = require('electron').remote
      const path = require('path')
      const url = require('url')
      qual_win = new BrowserWindow({
        //parent: win,
        minWidth: 140,
        width: 140,
        height: 250,
        minHeight: 250,
        transparent: true,
          frame:false,
          show: true, // Show and maximize later
          //icon: path.join(__dirname, 'assets', 'icons', 'main_icon.ico'),
          resizable: true,
      })

      qual_win.loadURL(url.format({
          pathname: path.join(__dirname, 'quality.html'),
          protocol: 'file:',
          slashes: true,
      }))

      //qual_win.webContents.openDevTools()
  },
  mousedown: function() {
    document.getElementById("quality").style.backgroundImage = "url(../assets/ui/quality_bg_bl_03.png)";
    setTimeout(function(){document.getElementById("quality").style.backgroundImage = "url(../assets/ui/quality_bg_bl_01.png)";},100);
      }
    })
    $("#quality").hover(function(){
      document.getElementById("quality").style.backgroundImage = "url(../assets/ui/quality_bg_bl_02.png)";}
      ,function(){
      document.getElementById("quality").style.backgroundImage = "";
})
//Code of quality button (end)


//Code of sound button (start)
$("#sound").on({
  click: function(){
      if(document.getElementById("sound").style.backgroundImage == "")
      {
        document.getElementById("sound").style.backgroundImage = "url(../assets/ui/volume_on_bl_02.png)";
        //API endpoint for audio
      }
      else{
        document.getElementById("sound").style.backgroundImage = "";
        //API endpoint for audio
      }
    }
  });
  //Code of sound button (end)



//Code of quality window
