const tabs = document.querySelectorAll('.tab-item');
const panes = document.querySelectorAll('.tab-pane')

const tabActive = document.querySelector('.tab-item.active')
const line = document.querySelector('.tabs .line')


line.style.left = tabActive.offsetLeft + 'px'
line.style.width = tabActive.offsetWidth + 'px'

tabs.forEach(function(tab,index){
    var pane = panes[index];

    tab.onclick = function(){
        document.querySelector('.tab-item.active').classList.remove('active')
        document.querySelector('.tab-pane.active').classList.remove('active')

        line.style.left = this.offsetLeft + 'px'
        line.style.width = this.offsetWidth + 'px'

        tab.classList.add('active')
        pane.classList.add('active')
    }
})