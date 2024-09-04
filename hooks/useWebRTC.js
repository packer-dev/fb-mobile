import * as React from "react";
import { RTCPeerConnection, mediaDevices } from "react-native-webrtc";
import { AppContext } from "../contexts";

const useWebRTC = () => {
  const peerConnection = React.useRef(null);
  const {
    state: { user },
    updateData,
  } = React.useContext(AppContext);

  React.useEffect(() => {
    if (!user) return;

    peerConnection.current = new RTCPeerConnection();
    peerConnection.current.onicecandidate = (event) => {
      if (event.candidate) {
        return;
      }
    };
    peerConnection.current.onaddstream = (event) => {};
    peerConnection.current.oniceconnectionstatechange = () => {};

    mediaDevices
      .getUserMedia({
        video: true,
        audio: true,
      })
      .then((stream) => {
        peerConnection.current.addStream(stream);
      });
    updateData("peerConnection", peerConnection.current);
    return () => {
      if (peerConnection.current) {
        peerConnection.current.close();
        peerConnection.current = null;
      }
    };
  }, [user]);
};

export default useWebRTC;
