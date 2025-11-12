import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

const WebsitePreview: React.FC<{ url: string; title: string }> = ({ url, title }) => {
  const [loadError, setLoadError] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    // Set a timeout to detect if iframe is blocked
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (loadError) {
    return (
      <div className="flex items-center justify-center h-full text-beige/60">
        <div className="text-center">
          <div className="text-4xl mb-2">🌐</div>
          <p className="mb-2">Preview unavailable</p>
          <a 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-orange hover:underline inline-flex items-center gap-1"
          >
            Visit Site <FaExternalLinkAlt size="12" />
          </a>
        </div>
      </div>
    );
  }

  return (
    <>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-beige/10 z-10">
          <div className="text-beige/60">Loading preview...</div>
        </div>
      )}
      <div 
        className="w-full h-full overflow-hidden" 
        style={{ 
          transform: 'scale(0.4)', 
          transformOrigin: 'top left', 
          width: '250%', 
          height: '250%' 
        }}
      >
        <iframe
          src={url}
          className="w-full h-full border-0"
          title={`${title} Preview`}
          loading="lazy"
          sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setLoadError(true);
            setIsLoading(false);
          }}
        />
      </div>
    </>
  );
};

export default WebsitePreview;

