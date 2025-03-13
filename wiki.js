// Override function
const renderer = {

    link(token){
        if(token.href===""){
            return `<a href="${"wiki.html?page="+token.text}">${token.text}</a>`;
        }else if(token.href[0]==='$'){
            return `<a href="${"wiki.html?page="+token.href.substring(1)}">${token.text}</a>`;
        }else if(token.href[0]==='~'){
            return `<a href="${"char.html?id="+token.href.substring(1).replaceAll('~',' ')}">${token.text}</a>`;
        }
        return `<a href="${token.href}">${token.text}</a>`;
    }
  };