import React from "react";
import "./Video.css";
import YouTube from "react-youtube";

const Video = () => {
  return (
    <div className="video">
      <table border="0" width="40%" style={{ justifySelf: "center" }}>
        <tbody>
          <tr>
            <th colSpan="3" bgcolor="#0000ff">
              <font color="#ffffff">참고 영상</font>
            </th>
          </tr>
          <tr>
            <td colSpan="3">
              <hr></hr>
            </td>
          </tr>
          <tr>
            <td>
              전자기 유속계 <br></br>LPT-500-25F<br></br> 수중 자세
            </td>
          </tr>
          <tr>
            <td>
              <YouTube
                videoId={"kBLqgfa1aGE"}
                opts={{
                  width: "100%",
                  playerVars: {
                    autoplay: 1, //자동재생 O
                    rel: 0,
                    modestbranding: 1, // 컨트롤 바에 youtube 로고를 표시하지 않음
                  },
                }}
                onEnd={(e) => {
                  e.target.stopVideo(0);
                }}
              />
            </td>
          </tr>
          <tr>
            <td colSpan="3">
              <hr></hr>
            </td>
          </tr>
          <tr>
            <td>
              모래 표면 측정기<br></br>
              WH-606<br></br>
              6ch 동시 동작 데모
            </td>
          </tr>
          <tr>
            <td>
              <YouTube
                videoId={"AQ2bOdmahAs"}
                opts={{
                  width: "100%",
                  playerVars: {
                    autoplay: 1, //자동재생 O
                    rel: 0,
                    modestbranding: 1, // 컨트롤 바에 youtube 로고를 표시하지 않음
                  },
                }}
                onEnd={(e) => {
                  e.target.stopVideo(0);
                }}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default Video;
