export default function() {
    this.namespace = 'api';

    this.get('/users/:id');
    this.get('/chirps');
}

/*
You can optionally export a config that is only loaded during tests
export function testConfig() {

}
*/
