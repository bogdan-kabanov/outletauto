const tabsWrapper = document.querySelectorAll(".tab-wrapper");

tabsWrapper.forEach((e) => {
  const tabInterface = e.querySelector(".tab-interface");
  const tabBtn = tabInterface.querySelectorAll(".tab-btn");
  let dataTarget = 0;
  const tabs = e.querySelectorAll('.tab');

  tabBtn.forEach((e) => {
    e.addEventListener("click", (e) => {
      dataTarget = e.target.getAttribute("data-tab");
      tabBtn.forEach(e=>{
        if(e.classList.contains('btn-active')){
            e.classList.remove('btn-active')
        }
      })
      e.target.classList.add('btn-active')
      tabs.forEach(e=>{
        if(e.classList.contains('tab-active')){
            e.classList.remove('tab-active')
        }
      })
      tabs[dataTarget-1]?.classList.add('tab-active')
    });
  });
});
