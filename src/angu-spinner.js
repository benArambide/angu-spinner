/**
*  Module : Angu-Spinner
*
*  Description: Angu-Spinner is a module to add spinner loading with angula model, you can show and hide spinner
*/
'user strict'
var app =  angular.module('Angu-Spinner', []);

app.directive('anguSpinner', [function () {
    var numberThemes = 4;
    return {
        restrict: 'E',
        require: 'ngModel',
        link: function (scope, iElement, iAttrs, ngModel) {
            iElement.parent().css('position', 'relative');
            iElement.addClass('angu-spinner');
            var op = scope.$eval(iAttrs.anguSpinnerOp);
            scope.$watch(function () {
                return ngModel.$modelValue;
            }, function (modelValue){  
                if(modelValue)
                {
                    var spinClass = "";
                    var spinMsg = "";
                    if( angular.isObject(op) )
                    {
                        spinClass = ( op.hasOwnProperty('theme') ) ? (( op.theme <= numberThemes) ? "angu-spinner-theme-" + op.theme : "angu-spinner-theme-1" ): "angu-spinner-theme-1";
                        spinMsg =  ( op.hasOwnProperty('msg') ) ? op.msg : 'Cargando...';
                    }   
                    iElement.html('<div class="'+spinClass+'"><span class="spin"></span><span class="word">'+op.msg+'</span></div>');
                }                    
                else
                    iElement.html('');
            });
        }
    };
}])