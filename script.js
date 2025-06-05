let exitAttempts = 0;
let allowClose = false;

function startVideo() {
  const video = document.getElementById('mainVideo');
  const overlay = document.getElementById('startOverlay');
  overlay.style.display = 'none';

  video.style.display = 'block';
  video.muted = false;

  video.play().catch(() => {
    alert("Clique necessário para iniciar o vídeo com som.");
  });
}

// Interceptar tentativa de sair
window.onbeforeunload = function (e) {
  if (allowClose) return;

  e.preventDefault();
  e.returnValue = '';

  if (exitAttempts === 0) {
    document.getElementById('exitOverlay1').style.display = 'flex';
  } else if (exitAttempts === 1) {
    document.getElementById('exitOverlay2').style.display = 'flex';
  }

  return '';
};

function acknowledgeExit(attempt) {
  if (attempt === 1) {
    document.getElementById('exitOverlay1').style.display = 'none';
    exitAttempts++;
  } else if (attempt === 2) {
    document.getElementById('exitOverlay2').style.display = 'none';
    allowClose = true;
    exitAttempts++;
    window.location.reload(); // Simula tentativa de fechar
  }
}
