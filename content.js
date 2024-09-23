function removeCommentsDiv() {
    const commentsDivs = document.querySelectorAll('.content-info__comments.heartsplosion-container');
    commentsDivs.forEach(div => div.remove());
    console.log("Comments removed.")
    const commentButtonDivs = document.querySelectorAll('.content__action--comment');
    commentButtonDivs.forEach(div => div.remove());
    console.log("Comments button removed.")
  }
  
  // Run the function when the DOM is fully loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', removeCommentsDiv);
  } else {
    // Wait for 5 seconds (5000 milliseconds) before executing the removeCommentsDiv function
    setTimeout(removeCommentsDiv, 5000);
    //removeCommentsDiv();
    console.log("Comments removed.")
  }