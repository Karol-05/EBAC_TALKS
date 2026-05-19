AOS.init();

const dataFesta = new Date("Oct 27, 2026 14:00:00");
const timeStampFesta = dataFesta.getTime();

const contaAsHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteFesta = timeStampFesta - timeStampAtual;

    const diasEmMs = 1000 * 60 * 60 * 24;
    const horasEmMs = 1000 * 60 * 60;
    const minutosEmMs = 1000 * 60;

    const diasAteFesta = Math.floor(distanciaAteFesta / diasEmMs)
    const horasAteFesta = Math.floor((distanciaAteFesta % diasEmMs) / horasEmMs);
    const minutosAteFesta = Math.floor((distanciaAteFesta % horasEmMs) / minutosEmMs);
    const segundosAteFesta = Math.floor((distanciaAteFesta % minutosEmMs) / 1000);

    document.getElementById('contador').innerHTML = `${diasAteFesta}d ${horasAteFesta}h ${minutosAteFesta}m ${segundosAteFesta}s`;

    if (distancaAteFesta > 0) {
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = 'Evento Expirado'
    }

}, 1000)