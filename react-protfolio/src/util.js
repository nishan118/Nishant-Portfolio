export const getImageUrl = (path)=>{

    const newpath = `/assets/${path}`;
    
    return new URL(newpath, import.meta.url).href;
};