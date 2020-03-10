import WebTorrent from 'webtorrent';
import "babel-polyfill";

console.log(WebTorrent.WEBRTC_SUPPORT);

const magnet = "magnet:?xt=urn:btih:0a732ea77424fec27fd98201d97a820bbf64e0f0&dn=ic_launcher.png&tr=ws%3A%2F%2Fapi.cmoremap.com.tw%3A5566&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.fastcast.nz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com";
let wtClient = new WebTorrent();

wtClient.add(magnet, async torrent=>{
    console.log("wtclient.add() success");
    console.log(torrent);
    torrent.files.forEach(async file=>{
        let image = document.querySelector("#pictore");
        try {
            let fileBlob = await new Promise((res,rej)=>{
                file.getBlob((e,blob)=>{
                    if(e) rej(e);
                    else res(blob);
                });
            });
            image.src = URL.createObjectURL(fileBlob);
            alert(image.src+" loaded!!");
        } catch (e) {
            alert(e);
        }
    });
});