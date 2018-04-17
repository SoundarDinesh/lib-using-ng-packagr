export default {
    input : 'dist/src/app/index.js',
    output: {
        file: 'dist/bundles/brand-new-library.umd.js',
        format: 'umd',
        name: 'brand-new-library',
        sourcemap:true,
        globals :{
            '@angular/core': 'ng.core',
    'rxjs/Observable': 'Rx',
    'rxjs/ReplaySubject': 'Rx',
    'rxjs/add/operator/map': 'Rx.Observable.prototype',
    'rxjs/add/operator/mergeMap': 'Rx.Observable.prototype',
    'rxjs/add/observable/fromEvent': 'Rx.Observable',
    'rxjs/add/observable/of': 'Rx.Observable'
        }
    }
}