import React from 'react';
import './assets/style.css';

function Asa() {

  return (
    <body>
      <header class="header">
          <div class="box">
              <h1><span class="sc">#</span><b class="pc"> AsaNeko</b></h1>
              <h2><span class="tr">##</span> sleepy cat</h2>
          </div>
          <img class="img" src="https://github.com/AsaNekoo.png" />
      </header>
      <div class="column">
          <div class="main">
              <box class="box">
                  <h1><span class="sc">#</span><b class="pc"> hobbies</b></h1>

                  <h2><span class="sc">-</span><b class="pc"> 3D Modeling</b></h2>
                  <h2><span class="sc">-</span><b class="pc"> Linux system administration</b></h2>
                  <h2><span class="sc">-</span><b class="pc"> Virtual Reality </b></h2>
              </box>
              <box class="box">
                  <h1><span class="sc">#</span><b class="pc"> skils</b></h1>

                  <h2><span class="sc">-</span><b class="pc"> Blender, Substance Painter</b></h2>
                  <h2><span class="sc">-</span><b class="pc"> JS </b><span class="sc2">[nodejs, react]</span></h2>
                  <h2><span class="tr">-</span><b class="pc"></b></h2>
              </box>
          </div>
          <box class="box">
              <h1><span class="sc">#</span><b class="pc"> info</b></h1>

              <h2><span class="sc">-</span><b class="pc"> e-mail: nekoa931@gmail.com</b></h2>
              <h2 class="end"><span class="sc">-</span><b class="pc"> languages: en_US, cs_CZ, ru_RU, uk_UA</b></h2>            
          </box>
      </div>
    </body>
  );
}

export default Asa;
