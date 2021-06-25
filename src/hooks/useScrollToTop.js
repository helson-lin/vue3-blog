/**
 * @description: 滚动到页面定顶部hooks
 * @param {*}
 * @return {*}
 */
const useScrollToTop = () => {
    const mainDiv = document.querySelector('html');
    const timer = setInterval(() => {
      if (mainDiv) {
        const nowScrollTop = mainDiv.scrollTop
        mainDiv.scrollTo(0, nowScrollTop - 30);
        if (mainDiv.scrollTop === 0) {
          clearInterval(timer)
        }
      }
    }, 10)
  }
  export default useScrollToTop