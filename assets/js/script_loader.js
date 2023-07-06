function loadScript(src) {
    return new Promise(function(resolve, reject) {
        var script = document.createElement('script');
        script.src = src;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
    });
}
function ScriptLoader(scripts) {
    document.addEventListener('DOMContentLoaded', function() {
    var scriptPromises = [];

    // Загружаем и добавляем каждый скрипт
    for(let i=0;i<scripts.length;i++)
        scriptPromises.push(loadScript(scripts[i]+'.js'));

    // Ждем загрузки всех скриптов
    Promise.all(scriptPromises)
        .then(function() {
            // Код, который будет выполнен после загрузки всех скриптов
        })
        .catch(function(error) {
            console.error('Ошибка загрузки скриптов:', error);
        });
});
}
