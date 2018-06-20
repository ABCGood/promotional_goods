var mySwiper = new Swiper('.swiper-container',{
    autoplay: true,
});

var Main1 = {
    data() {
        return {
            CostInfo: [
                {value: "free", label: '111'},
                {value: "cost", label: '2222'},
            ],
            value: ''
        };
    }
};
var Ctor = Vue.extend(Main1);
new Ctor().$mount('#myVue1');


var Main2 = {
    data() {
        return {
            CostInfo: [
                {value: "free", label: '111'},
                {value: "cost", label: '2222'},
            ],
            value: ''
        };
    }
};
var Ctor = Vue.extend(Main2);
new Ctor().$mount('#myVue2');


var Main3 = {
    data() {
        return {
            CostInfo: [
                {value: "free", label: '111'},
                {value: "cost", label: '2222'},
            ],
            value: ''
        };
    }
};
var Ctor = Vue.extend(Main3);
new Ctor().$mount('#myVue3');


var Main4 = {
    data() {
        return {
            CostInfo: [
                {value: "free", label: '111'},
                {value: "cost", label: '2222'},
            ],
            value: ''
        };
    }
};
var Ctor = Vue.extend(Main4);
new Ctor().$mount('#myVue4');