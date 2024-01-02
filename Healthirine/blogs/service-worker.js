self.addEventListener('fetch', function(event) {
    event.respondWith(
        fetch(event.request).catch(function() {
            return new Response('<h1>No Internet Connection</h1><p>Oops! It seems like you are not connected to the internet.</p>', { headers: { 'Content-Type': 'text/html' } });
        })
    );
});
