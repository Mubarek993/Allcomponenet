import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./AppleYOUtube.css";

export default function AppleYOUtube() {
//   const API_Key = import.meta.env.VITE_API_Key;
//   console.log(API_Key);
  const [Avideos, setVideos] = useState([]);
  useEffect(() => {
    const getVideos = async () => {
      try {
        const response = await fetch(
          `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCE_M8A5yxnLfW0KghEeajjw&maxResults=6&order=date&key=AIzaSyDHPZqSvjHOPUWpkGdTFl32EXFVpRaMBAw`
        );
        const data = await response.json();
        // console.log(data);
        setVideos(data.items || []);
      } catch (error) {
        console.log("error");
      }
    };
    getVideos();
    
  }, []);
  // console.log(Avideos);
  return (
    <div>
        
        
          <section className="youtubeVideosWrapper">
            <div className="allVideosWrapper">
              <div className="container">
                <div className="row justify-content-center text-center">
                  <div className="col-12">
                    <div className="title-wrapper">
                      <br />
                      <h1>the new </h1>
                      <br />
                    </div>
                  </div>

                      {Avideos?.map((video ,i) => {

                        return  (
                  <div key={i} className="col-sm-12 col-md-6 col-lg-4">
                    <div className="singleVideoWrapper">
                      <div className="videoThumbnail">
                        <a
                          href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img
                            src={video.snippet.thumbnails.high.url}
                            alt="thumbnails"
                          />
                        </a>
                      </div>
                      <div className="videoInfoWrapper">
                        <div className="videoTitle">
                          <a
                            href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {video.snippet.title}
                          </a>
                        </div>
                        <div className="videoDesc">
                          {video.snippet.description}
                        </div>
                      </div>
                    </div>
                  </div>
                        );
                      })}
                  {/* <div key={video.id.videoId}>
                    <h3>{video.snippet.title}</h3>
                    <iframe
                      width="560"
                      height="315"
                      src={`https://www.youtube.com/embed/${video.id.videoId}`}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  </div> */}
                </div>
              </div>
            </div>
          </section>
        );
      
    </div>
  );
}
