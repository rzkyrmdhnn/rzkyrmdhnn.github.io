// add.js

// Memuat script Google AdSense
(function() {
    var script = document.createElement('script');
    script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5999121703542450';
    script.async = true;
    script.crossOrigin = 'anonymous';
    document.head.appendChild(script);
})();

// Menambahkan elemen iklan ke halaman
(function() {
    var ins = document.createElement('ins');
    ins.className = 'adsbygoogle';
    ins.style.display = 'block';
    ins.setAttribute('data-ad-client', 'ca-pub-5999121703542450');
    ins.setAttribute('data-ad-slot', '3635431289');
    ins.setAttribute('data-ad-format', 'auto');
    ins.setAttribute('data-full-width-responsive', 'true');
    
    // Menambahkan elemen iklan ke body atau elemen yang diinginkan
    document.body.appendChild(ins);
    
    // Menjalankan iklan
    (window.adsbygoogle = window.adsbygoogle || []).push({});
})();
