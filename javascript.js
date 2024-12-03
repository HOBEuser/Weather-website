document.getElementById('show-radar').addEventListener('click', function () {
    const iframe = document.createElement('iframe');
    iframe.src = "https://www.rainviewer.com/map.html?type=radar&lat=40.7128&lon=-74.0060&zoom=8&opacity=0.8&basemap=1";
    iframe.width = "100%";
    iframe.height = "500";
    iframe.frameBorder = "0";
    iframe.loading = "lazy";
    iframe.title = "Radar Map";

    const container = document.getElementById('radar-container');
    container.innerHTML = "";
    container.appendChild(iframe);
});