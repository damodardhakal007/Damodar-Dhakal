const watchForm = document.getElementById('watch-form');
const videoUrlInput = document.getElementById('video-url');
const watchStatus = document.getElementById('watch-status');
const watchPlayer = document.getElementById('watch-player');
const watchLink = document.getElementById('watch-link');
const watchProgress = document.getElementById('watch-progress');
const videoProgress = document.getElementById('video-progress');
const progressLabel = document.getElementById('progress-label');

function getVideoSource(url) {
    const hostname = url.hostname.toLowerCase().replace(/^www\./, '');
    const segments = url.pathname.split('/').filter(Boolean);

    if (hostname === 'youtube.com' || hostname === 'm.youtube.com' || hostname === 'youtu.be') {
        let videoId = '';
        if (hostname === 'youtu.be') videoId = segments[0] || '';
        else if (segments[0] === 'watch') videoId = url.searchParams.get('v') || '';
        else if (['shorts', 'embed', 'live'].includes(segments[0])) videoId = segments[1] || '';
        if (/^[\w-]{11}$/.test(videoId)) {
            return { type: 'embed', url: `https://www.youtube-nocookie.com/embed/${videoId}` };
        }
    }

    if (hostname === 'tiktok.com') {
        const videoIndex = segments.indexOf('video');
        const videoId = videoIndex >= 0 ? segments[videoIndex + 1] : '';
        if (/^\d+$/.test(videoId || '')) {
            return { type: 'embed', url: `https://www.tiktok.com/embed/v2/${videoId}` };
        }
    }

    if (hostname === 'vimeo.com' || hostname === 'player.vimeo.com') {
        const videoId = hostname === 'player.vimeo.com' ? segments[1] : segments[0];
        if (/^\d+$/.test(videoId || '')) {
            return { type: 'embed', url: `https://player.vimeo.com/video/${videoId}` };
        }
    }

    if (/\.(mp4|webm|ogg|ogv)$/i.test(url.pathname)) return { type: 'file', url: url.href };
    return { type: 'external', url: url.href };
}

function showVideo(source, originalUrl) {
    watchPlayer.replaceChildren();
    watchPlayer.hidden = false;
    watchLink.hidden = false;
    watchLink.href = originalUrl;
    watchProgress.hidden = source.type !== 'file';
    videoProgress.value = 0;
    progressLabel.textContent = 'Playback progress: 0%';

    if (source.type === 'embed') {
        const frame = document.createElement('iframe');
        frame.className = 'watch-frame';
        frame.src = source.url;
        frame.title = 'Video player';
        frame.allow = 'accelerometer; encrypted-media; gyroscope; picture-in-picture';
        frame.allowFullscreen = true;
        frame.referrerPolicy = 'strict-origin-when-cross-origin';
        watchPlayer.append(frame);
        watchStatus.textContent = 'Video loaded. Use the provider controls to play it.';
        return;
    }

    if (source.type === 'file') {
        const video = document.createElement('video');
        video.className = 'watch-video';
        video.src = source.url;
        video.controls = true;
        video.preload = 'metadata';
        video.addEventListener('timeupdate', () => {
            if (!Number.isFinite(video.duration) || video.duration <= 0) return;
            const percentage = Math.min(100, Math.round((video.currentTime / video.duration) * 100));
            videoProgress.value = percentage;
            progressLabel.textContent = `Playback progress: ${percentage}%`;
        });
        watchPlayer.append(video);
        watchStatus.textContent = 'Direct video loaded. Use the player controls to watch.';
        return;
    }

    watchPlayer.hidden = true;
    watchStatus.textContent = 'This site cannot be embedded here. Open the original video in a new tab.';
}

watchForm.addEventListener('submit', (event) => {
    event.preventDefault();

    let url;
    try {
        url = new URL(videoUrlInput.value.trim());
    } catch {
        watchStatus.textContent = 'Enter a valid video link.';
        return;
    }

    if (!['http:', 'https:'].includes(url.protocol) || url.username || url.password) {
        watchStatus.textContent = 'Use a public link that starts with http:// or https://.';
        return;
    }

    showVideo(getVideoSource(url), url.href);
});
