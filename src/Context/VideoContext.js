import { createContext } from 'react';
export const VideoContextKey = createContext();
function VideoContext({ children, value }) {
    <VideoContextKey.Provider value={value}>
        {children}
    </VideoContextKey.Provider>;
}
export default VideoContext;

