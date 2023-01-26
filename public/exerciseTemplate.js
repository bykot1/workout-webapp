(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['exercise'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"exercise\" data-difficulty=\""
    + alias4(((helper = (helper = helpers.difficulty || (depth0 != null ? depth0.difficulty : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"difficulty","hash":{},"data":data}) : helper)))
    + "\" data-type=\""
    + alias4(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"type","hash":{},"data":data}) : helper)))
    + "\" data-reps=\""
    + alias4(((helper = (helper = helpers.reps || (depth0 != null ? depth0.reps : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"reps","hash":{},"data":data}) : helper)))
    + "\">\n  <div class=\"exercise-contents\">\n    <div class=\"exercise-title-container\">\n      <a href=\"#\" class=\"exercise-title\">"
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "</a>\n    </div>\n    <div class=\"exercise-image-container\">\n      <img src=\""
    + alias4(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data}) : helper)))
    + "\" alt=\""
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "\">\n    </div>\n    <div class=\"exercise-info-container\">\n      <p> Recomended Reps: "
    + alias4(((helper = (helper = helpers.reps || (depth0 != null ? depth0.reps : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"reps","hash":{},"data":data}) : helper)))
    + " </p>\n      <p> Difficulty: "
    + alias4(((helper = (helper = helpers.difficulty || (depth0 != null ? depth0.difficulty : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"difficulty","hash":{},"data":data}) : helper)))
    + " </p>\n    </div>\n  </div>\n</div>\n";
},"useData":true});
})();