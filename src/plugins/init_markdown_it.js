// 1. import the plugin - documentation
import MarkdownIt from 'markdown-it';

// 2. create the function
const initMarkdownIt = () => {
    const textarea = document.getElementById('editor');
    const preview = document.getElementById('preview');
    const markdown = new MarkdownIt();
    // if this were Ruby
    // MarkdownIt.new()

    textarea.addEventListener('keyup', (event) => {
      const whatUserHasWritten = textarea.value;
      const html = markdown.render(whatUserHasWritten);
      preview.innerHTML = html;
    });
};

// 3. export the function
export { initMarkdownIt };


// SRP - Single Responsibility Principle