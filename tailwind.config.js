module.exports = {
    theme: {
      extend: {
        animation: {
          'bg-pulse': 'bgPulse 8s ease-in-out infinite', // Custom background animation
        },
        keyframes: {
          bgPulse: {
            '0%, 100%': { background: '#1a202c' }, // Dark color at the start and end
            '50%': { background: '#2d3748' }, // Slightly lighter dark shade at the middle
          },
        },
      },
    },
  };
  