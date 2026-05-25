type YouTubePlaylistEmbedProps = {
  playlistId: string;
  title: string;
};

export function YouTubePlaylistEmbed({ playlistId, title }: YouTubePlaylistEmbedProps) {
  return (
    <div className="relative aspect-video overflow-hidden rounded-lg border border-border bg-bg-secondary">
      <iframe
        src={`https://www.youtube-nocookie.com/embed/videoseries?list=${playlistId}`}
        title={title}
        className="absolute inset-0 h-full w-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
      />
    </div>
  );
}
