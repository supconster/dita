/* 
 * The 'properties.js' file is generated in the output directory next to this file
 *  and contains the parameters configured in the current transformation.
 */
define(['properties'], function (properties) {
    return {
        get : function (property) {
            return properties[property];
        },

        getBoolean : function (property) {
            var prop = properties[property];
            return prop == 'true' || prop == 'yes';
        },
        getInteger : function (property) {
            var prop = properties[property];
            return parseInt(prop, 10);
        },
        getIndexerLanguage : function() {
            // Implementation copied from IndexerTask.setIndexerLanguage()
            var language = this.get('webhelp.language');
            if (language) {
                var pos = language.indexOf('_');
                if (pos != -1) {
                    language = language.substring(0, pos);
                }
				/*
                 * xml:lang="ko-KR" 인 경우 "브레이크" 로 검색 시 검색 안됨
                 * "브레" 로 검색 가능 => 2글짜 씩 indexing
                 * xml:lang="ko" 로 설정 시 "브레이크" 검색 됨.
                 * "ko_KR", "ko-KR" => "ko" 로 return 
				 * 24-08-08: CJK 언어 2글짜 씩 indexing 으로 인해
				 * "사이드" 검색시 "블레이드" 도 검색되는 문제 있음
				 * => 언어가 "ko" 인 경우 indexing 및 검색 시 "en" 으로 강제 변경
                 */
				pos = language.indexOf('-');
                if (pos != -1) {
                    language = language.substring(0, pos);
                }
				if (language.toLowerCase() === 'ko') {
					language = 'en';
				}
            }
            return language;
        }
    };
});