import n64 from "../Boards/n64.jpg";
import dreamcast from "../Boards/dreamcast.jpg";
import gamecube from "../Boards/gamecube.jpg";
import ps1 from "../Boards/ps1.jpg";
import ps2 from "../Boards/ps2.jpg";
import ps4 from "../Boards/ps4.jpg";
import xbox from "../Boards/xbox.jpg";
import xbox360 from "../Boards/xbox360.jpg";

import aurthur from "../Characters/aurthur.png";
import bobomb from "../Characters/bobomb.png";
import boo from "../Characters/boo.png";
import chief from "../Characters/chief.png";
import cj from "../Characters/cj.png";
import cloud from "../Characters/cloud.png";
import conker from "../Characters/conker.png";
import crash from "../Characters/crash.png";
import drake from "../Characters/drake.png";
import kratos from "../Characters/kratos.png";
import link from "../Characters/link.png";
import luigi from "../Characters/luigi.png";
import marcus from "../Characters/marcus.png";
import mario from "../Characters/mario.png";
import mew from "../Characters/mew.png";
import niko from "../Characters/niko.png";
import parappa from "../Characters/parappa.png";
import prince from "../Characters/prince.png";
import ratchet from "../Characters/ratchet.png";
import raz from "../Characters/raz.png";
import ryu from "../Characters/ryu.png";
import samba from "../Characters/samba.png";
import sonic from "../Characters/sonic.png";
import tommy from "../Characters/tommy.png";


let maps=[
    {
        name:"n64",
        url: n64,
    },
    {
        name:"dreamcast",
        url: dreamcast,
    },
    {
        name:"gamecube",
        url: gamecube,
    },
    {
        name:"ps1",
        url: ps1,
    },
    {
        name:"ps2",
        url: ps2,
    },
    {
        name:"ps4",
        url: ps4,
    },
    {
        name:"xbox",
        url: xbox,
    },
    {
        name:"xbox360",
        url: xbox360,
    }
];

let characters=[
    {
        name:"aurthur",
        url: aurthur
    },
    {
        name:"bobomb",
        url: bobomb
    },
    {
        name:"boo",
        url:boo
    },
    {
        name:"chief",
        url:chief
    },
    {
        name:"cj",
        url:cj
    },
    {
        name:"cloud",
        url:cloud
    },
    {
        name:"conker",
        url:conker
    },
    {
        name:"crash",
        url:crash
    },
    {
        name:"drake",
        url:drake
    },
    {
        name:"kratos",
        url:kratos
    },
    {
        name:"link",
        url:link
    },
    {
        name:"luigi",
        url:luigi
    },
    {
        name:"marcus",
        url:marcus
    },
    {
        name:"mario",
        url:mario
    },
    {
        name:"mew",
        url:mew
    },
    {
        name:"niko",
        url:niko
    },
    {
        name:"parappa",
        url:parappa
    },
    {
        name:"prince",
        url:prince
    },
    {
        name:"ratchet",
        url:ratchet
    },
    {
        name:"raz",
        url:raz
    },
    {
        name:"ryu",
        url:ryu
    },
    {
        name:"samba",
        url:samba
    },
    {
        name:"sonic",
        url:sonic
    },
    {
        name:"tommy",
        url:tommy
    }
];

let charactersToMaps={
    "dreamcast":[ characters[14],characters[21],characters[22] ],
    "gamecube":[ characters[2],characters[10],characters[13] ],
    "n64":[ characters[1],characters[6],characters[11] ],
    "ps1":[ characters[5],characters[7],characters[16] ],
    "ps2":[ characters[17],characters[18],characters[23] ],
    "ps4":[ characters[0],characters[8],characters[9] ],
    "xbox":[ characters[4],characters[20],characters[19] ],
    "xbox360":[ characters[3],characters[12],characters[15] ],
}

export {maps,characters,charactersToMaps};