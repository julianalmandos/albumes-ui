import axios from 'axios';

export const isValidYoutubeCode = async (code) => {
  if (!code) { return false };

  const videoUrl = `http://www.youtube.com/watch?v=${code}`
  const checkUrl = `https://www.youtube.com/oembed?url=${videoUrl}`

  try {
    await axios.get(checkUrl);
    return true;
  } catch {
    return false;
  }
}