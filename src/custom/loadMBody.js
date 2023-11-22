//https://www.orangecollarmedia.com/using-mindbody-branded-web-widgets-with-react

const loadMBody = (callback) => {
    const existingScript = document.getElementById('mindBody');
    if (!existingScript) {
        const script = document.createElement('script');
        script.src = 'https://widgets.mindbodyonline.com/javascripts/healcode.js';
        script.id = 'mindBody';
        script.async = true;
        script.crossorigin = 'anonymous';
        document.body.appendChild(script);
        script.onload = () => {
            if (callback) callback();
        };
    }
    if (existingScript && callback) callback();
};
export default loadMBody;