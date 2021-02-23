var aceEditor=ace.edit("source_code");

aceEditor.setTheme("ace/theme/monokai");

aceEditor.setOptions({
    enableBasicAutocompletion: true,
    enableLiveAutocompletion: true,
    enableSnippets: true,
});

$("#run_button").on("click",function(event){
    runCode();
});
aceEditor.commands.addCommand({
    bindKey: {win: "Ctrl-Enter", mac: "Command-Enter"},
    exec: runCode,
});

function setEditorLanguage(language){
    var languageToMode={
        c: "c_cpp",
        cpp: "c_cpp",
        java: "java",
        python3: "python",
        ruby: "ruby",
        php: "php",
        javascript: "javascript",
    };
    var mode=languageToMode[language];
    aceEditor.session.setMode("ace/mode/" + mode);
}
$("#language").val("c");
setEditorLanguage("c");
$("#language").on("change",function(event){
    setEditorLanguage(this.value);
});