// ---------- Sample dataset (replace with your real links) ----------
    const docs = [
     { id:1, title:"Muhtasali wa Kiswahili kidato cha 1-4", subject:"Kiswahili", form:"Form 1", year:2023, type:"Syllabus", uploadedBy:"TIE", downloads:1250, url:"https://www.tie.go.tz/uploads/documents/sw-1741937359-MUHTASARI%20WA%20KISWAHILI%20KIDATO%20%20I-IV%20FINAL.pdf"},
      { id:2, title:"Literature in English Syllabus Form 1-4", subject:"Literature in English", form:"Form 1", year:2023, type:"Syllabus", uploadedBy:"TIE", downloads:100, url:"https://www.tie.go.tz/uploads/documents/sw-1727256752-LITERATURE%20IN%20ENGLISH%20O-LEVEL%20FINAL.pdf"},
      { id:3, title:"English Language Syllabus Form 1-4", subject:"English Language", form:"Form 1", year:2023, type:"Syllabus", uploadedBy:"TIE", downloads:890, url:"https://www.tie.go.tz/uploads/documents/sw-1756459411-ENGLISH%20lANGUAGE%20FINAL.pdf"},
        { id:4, title:"Physics SyllabusForm 1-4", subject:"Physics", form:"Form 1", year:2023, type:"Syllabus", uploadedBy: "TIE", downloads:2500, url:"https://www.tie.go.tz/uploads/documents/sw-1727257838-PHYSICS%20FOR%20ORDINARY%20SECONDARY%20EDUCATION%20FINAL.pdf"},
            { id:5, title:"Chemistry Syllabus Form1-4", subject:"Chemistry", form:"Form 1", year:2023, type:"Syllabus", uploadedBy:"TIE", downloads:2500, url:"https://www.tie.go.tz/uploads/documents/sw-1727192894-CHEMISTRY%20O'LEVEL%20EDUCATION%20FINAL.pdf"},
              { id:6, title:"History Syllabus Form1-4", subject:"History", form:"Form 1", year:2023, type:"Syllabus", uploadedBy:"TIE", downloads:2500, url:"https://www.tie.go.tz/uploads/documents/sw-1727255952-HISTORY%20FOR%20FORM%20I-IV.pdf"},
                { id:7, title:"Geography Syllabu from 1-4", subject:"Geography", form:"Form 1", year:2023, type:"Syllabus", uploadedBy:"TIE", downloads:2500, url:"https://www.tie.go.tz/uploads/documents/sw-1727255849-GEOGRAPHY%20O-Level.pdf"},
                 { id:8, title:"French language Syllabus Form 1-4", subject:"French Language", form:"Form 1", year:2023, type:"Syllabus", uploadedBy:"TIE", downloads:2500, url:"https://www.tie.go.tz/uploads/documents/sw-1727255679-FRENCH%20O-LEVEL%20FINAL.pdf"},
                  { id:9, title:"Chinese language Syllabus Form 1-4)", subject:"Chinese Language", form:"Form 1", year:2023, type:"Syllabus", uploadedBy:"TIE", downloads:2500, url:"https://www.tie.go.tz/uploads/documents/sw-1727193068-CHINESE%20LANGUAGE%20SYLLABUS%20FOR%20ORDINARY%20SECONDARY%20EDUCATION%20FORM%20I-IV.pdf"},
                   { id:10, title:"Book keeping Syllabus Form 1-4", subject:"Book keeping", form:"Form 1", year:2023, type:"Syllabus", uploadedBy:"TIE", downloads:2500, url:"https://www.tie.go.tz/uploads/documents/sw-1727192590-Book-keeping%20Form%20I-IV%20FINAL%20SYLLABUS.pdf"},
                    { id:11, title:"Business studies Syllabus Form 1-4", subject:"Business Studies", form:"Form 1", year:2023, type:"Syllabus", uploadedBy:"TIE", downloads:2500, url:"https://www.tie.go.tz/uploads/documents/sw-1727192697-BUSINESS%20STUDIES%20SYLLABUS%20FOR%20ORDINARY%20LEVEL%20SECONDARY%20EDUCATION.pdf"},
 { id:12, title:"Biology Syllabus Form 1-4", subject:"Biology", form:"Form 1", year:2023, type:"Syllabus", uploadedBy:"TIE", downloads:2500, url:"https://www.tie.go.tz/uploads/documents/sw-1727192422-BIOLOGY%20SYLLABUS%20ORDINARY%20SECONDARY%20FINAL%20.pdf"},
  { id:14, title:"Theatre arts Syllabus Form 1-4)", subject:"Theatre arts", form:"Form 1", year:2023, type:"Syllabus", uploadedBy:"TIE", downloads:2500, url:"https://www.tie.go.tz/uploads/documents/sw-1727258000-THEATRE%20ARTS%20SYLLABUS%20FOR%20ORDINARY%20SECONDARY%20EDUCATION.pdf"},
   { id:15, title:"Sports studies Syllabus Form 1-4", subject:"Sports studies", form:"Form 1", year:2023, type:"Syllabus", uploadedBy:"TIE", downloads:2500, url:"https://www.tie.go.tz/uploads/documents/sw-1727257915-SPORT%20STUDIES%20O-LEVEL%20FINAL.pdf"},
    { id:16, title:"Music Syllabus Form 1-4", subject:"Music", form:"Form 1", year:2023, type:"Syllabus", uploadedBy:"TIE", downloads:2500, url:"https://www.tie.go.tz/uploads/documents/sw-1727257534-MUSIC%20ORDINARY%20SYLLABUS%20FINAL.pdf"},
     { id:17, title:"Textile and garment construction Syllabus Form 1-4", subject:"Textile and garment", form:"Form 1", year:2023, type:"Syllabus", uploadedBy:"TIE", downloads:2500, url:"https://www.tie.go.tz/uploads/documents/sw-1727257608-ORDINARY-%20TEXTILE%20AND%20GARMENT%20CONSTRUCTION-RESTRUCTURED.pdf"},
      { id:18, title:"Elimu ya dini ya kiislamu Syllabus Form 1-4", subject:"Elimu ya dini ya kiislamu", form:"Form 1", year:2023, type:"Syllabus", uploadedBy:"TIE", downloads:2500, url:"https://www.tie.go.tz/uploads/documents/sw-1727257430-MUHTASARI%20WA%20ELIMU%20YA%20DINI%20YA%20KIISLAM%20KWA%20SHULE%20ZA%20SEKONDARI%20KIDATO%20CHA%20I%20-%20IV.pdf"},
       { id:19, title:"Historia ya Tanzania na maadili Syllabus  Form 1-4", subject:"Historia ya Tanzania na maadili", form:"Form 1", year:2023, type:"Syllabus", uploadedBy:"TIE", downloads:2500, url:"https://www.tie.go.tz/uploads/documents/sw-1727257138-Muhtasari%20Historia%20ya%20Tanzania%20&%20Maadili%20I%20-%20IV.pdf"},
        { id:20, title:"Arabic language Syllabus Form 1-4", subject:"Arabic Language", form:"Form 1", year:2023, type:"Syllabus", uploadedBy:"TIE", downloads:2500, url:"https://www.tie.go.tz/uploads/documents/sw-1727256074-KIARABU%20ELIMU%20YA%20SEKONDARI%20KIDATO%20CHA%20I-IV%20FINAL.pdf"},
         { id:21, title:"Mathematics Syllabus Form 1-4", subject:"Mathematics", form:"Form 1", year:2023, type:"Syllabus", uploadedBy:"TIE", downloads:2500, url:"https://www.tie.go.tz/uploads/documents/sw-1727256902-MATHEMATICS%20SYLLABUS%20-%20O%20level%20final.pdf"},
          { id:21, title:"Food and Nutrition Syllabus Form 1-4", subject:"Food and Nutrition", form:"Form 1", year:2023, type:"Syllabus", uploadedBy:"TIE", downloads:2500, url:"https://www.tie.go.tz/uploads/documents/sw-1727255526-FOOD%20AND%20HUMAN%20NUTRITION%20STD%20I%20-%20IV.pdf"},
           { id:21, title:"Agriculture Syllabus Form 1-4", subject:"Agriculture", form:"Form 1", year:2023, type:"Syllabus", uploadedBy:"TIE", downloads:2500, url:"https://www.tie.go.tz/uploads/documents/sw-1727192126-AGRICULTURE_%20O-LEVEL%20SYLLABUS%20FINAL.pdf"},
            { id:22, title:"Bible Knowledge syllabus form 1-4", subject:"Bible Knowledge", form:"Form 1", year:2023, type:"Syllabus", uploadedBy:"TIE", downloads:2500, url:"https://www.tie.go.tz/uploads/documents/sw-1727192234-BIBLE%20KNOWLEDGE%20COMMISSIONER%20FINAL.pdf"},
            { id:22, title:"Fasihi ya kiswahili kidato cha 3&4", subject:"Fasihi ya Kiswahili", form:"Form 3&4", year:2023, type:"Syllabus", uploadedBy:"TIE", downloads:2500, url:"https://www.tie.go.tz/uploads/documents/sw-1727194298-FASIHI%20YA%20KISWAHILI%20SEKONDARI%20KIDATO%20CHA%20III-IV.pdf"},
      { id:23, title:"Tourism Syllabus Form 5&6", subject:"Tourism", form:"Form 5&6", year:2023, type:"Syllabus", uploadedBy:"TIE", downloads:780, url:"https://www.tie.go.tz/uploads/documents/sw-1745580916-TOURISM%20FOR%20FORM%20V-VI.pdf"},
       { id:23, title:"Literature in English Syllabus Form 5&6", subject:"Literature in English", form:"Form 5&6", year:2023, type:"Syllabus", uploadedBy:"TIE", downloads:780, url:"https://www.tie.go.tz/uploads/documents/sw-1727270828-LITERATURE%20IN%20ENGLISH%20A-LEVEL%20FINAL%20.pdf"},
       { id:23, title:"Physics Syllabus Form 5&6", subject:"Physics", form:"Form 5&6", year:2023, type:"Syllabus", uploadedBy:"TIE", downloads:780, url:"https://www.tie.go.tz/uploads/documents/sw-1727271434-Physics%20Syllabus%20for%20Advanced%20final.pdf"},
       { id:23, title:"Mtaala wa Kiswahili Form 5&6", subject:"Kiswahili", form:"Form 5&6", year:2023, type:"Syllabus", uploadedBy:"TIE", downloads:780, url:"https://www.tie.go.tz/uploads/documents/sw-1727270761-KISWAHILI%20SEKONDARI%20FINAL.pdf"},
       { id:23, title:"Hiatory Syllabus Form 5&6", subject:"History", form:"Form 5&6", year:2023, type:"Syllabus", uploadedBy:"TIE", downloads:780, url:"https://www.tie.go.tz/uploads/documents/sw-1727270697-HISTORY%20SYLLABUS.pdf"},
       { id:23, title:"Historia ya Tanzania na Maadili Syllabus Kidato cha 5&6", subject:"Historia ya Tanzania na maadili", form:"Form 5&6", year:2023, type:"Syllabus", uploadedBy:"TIE", downloads:780, url:"https://www.tie.go.tz/uploads/documents/sw-1727270653-HISTORIA%20YA%20TANZANIA%20NA%20MAADILI%20KIDATO%20CHA%20V-VI%20KAMISHNA%20FINAL.pdf"},
       { id:23, title:"Geography Syllabus Form 5&6", subject:"Geography", form:"Form 5&6", year:2023, type:"Syllabus", uploadedBy:"TIE", downloads:780, url:"https://www.tie.go.tz/uploads/documents/sw-1727270596-GEOG%20FINAL.pdf"},
       { id:23, title:"Frenc Language Syllabus Form 5&6", subject:"French Language", form:"Form 5&6", year:2023, type:"Syllabus", uploadedBy:"TIE", downloads:780, url:"https://www.tie.go.tz/uploads/documents/sw-1727270543-French%20Muhutasari%20SEKONDARI%20YA%20JUU.pdf"},
       { id:23, title:"Music Syllabus Form 5&6", subject:"Music", form:"Form 5&6", year:2023, type:"Syllabus", uploadedBy:"TIE", downloads:780, url:"https://www.tie.go.tz/uploads/documents/sw-1727271361-MUSIC%20SYLLABUS%20FINAL.pdf"},
       { id:23, title:"Sport Stidies Syllabus Form 5&6", subject:"Sports studies", form:"Form 5&6", year:2023, type:"Syllabus", uploadedBy:"TIE", downloads:780, url:"https://www.tie.go.tz/uploads/documents/sw-1727271507-Sport%20Studies%20syllabus%20for%20Advanced%20Secondary%20Education%20Form%20V%20-%20VI.pdf"},
       { id:23, title:"Food and Nutrition", subject:"Food and Nutrition", form:"Form 5&6", year:2023, type:"Syllabus", uploadedBy:"TIE", downloads:780, url:"https://www.tie.go.tz/uploads/documents/sw-1727270432-FOOD%20AND%20NUTRITION%20FINAL.pdf"},
       { id:23, title:"Fine Arts Syllabus Form 5&6", subject:"Fine Arts", form:"Form 5&6", year:2023, type:"Syllabus", uploadedBy:"TIE", downloads:780, url:"https://www.tie.go.tz/uploads/documents/sw-1727270371-FINE%20ART-SYLLABUS%20A%20LEVEL.pdf"},
       { id:23, title:"Mtaala wa Fasihi ya Kiswahili kidato cha 5&6", subject:"Fasihi ya Kiswahili", form:"Form 5&6", year:2023, type:"Syllabus", uploadedBy:"TIE", downloads:780, url:"https://www.tie.go.tz/uploads/documents/sw-1727270323-FASIHI%20YA%20KISWAHILI%20KIDATO%20CHA%205&6%20FINAL.pdf"},
       { id:23, title:"English Language Syllabus Form 5&6", subject:"English Language", form:"Form 5&6", year:2023, type:"Syllabus", uploadedBy:"TIE", downloads:780, url:"https://www.tie.go.tz/uploads/documents/sw-1727270222-ENGLISH%20LANGUAGE%20SYLLABUS%20FOR%20ADVANCE%20FINAL.pdf"},
       { id:23, title:"Economics Syllabus Form 5&6", subject:"Economics", form:"Form 5&6", year:2023, type:"Syllabus", uploadedBy:"TIE", downloads:780, url:"https://www.tie.go.tz/uploads/documents/sw-1727270174-Economic%20Form%20V-VI%20FINAL.pdf"},
       { id:23, title:"Divinity Syllabus Form 5&6", subject:"Divinity", form:"Form 5&6", year:2023, type:"Syllabus", uploadedBy:"TIE", downloads:780, url:"https://www.tie.go.tz/uploads/documents/sw-1727270070-DIVINITY%20SELLA%20FINAL.pdf"},
       { id:23, title:"Computer Science Syllabus Form 5&6", subject:"Computer Science", form:"Form 5&6", year:2023, type:"Syllabus", uploadedBy:"TIE", downloads:780, url:"https://www.tie.go.tz/uploads/documents/sw-1727269944-COMP%20SCIENCE_FM_V_AND_VI_Syllabus%20_Typesetting_%20FINAL.pdf"},
       { id:23, title:"Chinese Language Syllabus Form 5&6", subject:"Chinese Language", form:"Form 5&6", year:2023, type:"Syllabus", uploadedBy:"TIE", downloads:780, url:"https://www.tie.go.tz/uploads/documents/sw-1727269892-CHINESE%20LANGUAGE%20SYLLABUS%20FOR%20ADVANCED%20SECONDARY%20EDUCATION%20FORM%20V-VI%202.pdf"},
       { id:23, title:"Business Studies Syllabus Form 5&6", subject:"Business Studies", form:"Form 5&6", year:2023, type:"Syllabus", uploadedBy:"TIE", downloads:780, url:"https://www.tie.go.tz/uploads/documents/sw-1727269765-BUSINESS%20STUDIES%20SYLLABUS%20FOR%20ADVANCED%20LEVEL%20SECONDARY%20EDUCATION.pdf"},
       { id:23, title:"Chemistry Syllabus Form 5&6", subject:"Chemistry", form:"Form 5&6", year:2023, type:"Syllabus", uploadedBy:"TIE", downloads:780, url:"https://www.tie.go.tz/uploads/documents/sw-1727269817-CHEMISTRY%20SYLLABUS%20FINAL.pdf"},
       { id:23, title:"Biology Syllabus Form 5&6", subject:"Biology", form:"Form 5&6", year:2023, type:"Syllabus", uploadedBy:"TIE", downloads:780, url:"https://www.tie.go.tz/uploads/documents/sw-1727269300-BIOLOGY%20SYLLABUS%2027.05.24.pdf"},
       { id:23, title:"Basic  Applied Mathematics Syllabus Form 5&6", subject:"Basic  Applied Mathematics", form:"Form 5&6", year:2023, type:"Syllabus", uploadedBy:"TIE", downloads:780, url:"https://www.tie.go.tz/uploads/documents/sw-1727269234-BASIC%20APPLIED%20MATHEMATICS%20FINAL%20Folder.pdf"},
       { id:23, title:"Arabic Language Syllabus Form 5&6", subject:"Arabic Language", form:"Form 5&6", year:2023, type:"Syllabus", uploadedBy:"TIE", downloads:780, url:"https://www.tie.go.tz/uploads/documents/sw-1727267632-Arabic%20ADVANCED%20FINAL.pdf"},
       { id:23, title:"Agriculture Syllabus Form 5&6", subject:"Agriculture", form:"Form 5&6", year:2023, type:"Syllabus", uploadedBy:"TIE", downloads:780, url:"https://www.tie.go.tz/uploads/documents/sw-1727267587-AGRICULTURE%20A-Level%20Syllabus%20FINAL.pdf"},
        { id:23, title:"Accountancy Syllabus Form 5&6", subject:"Accountancy", form:"Form 5&6", year:2023, type:"Syllabus", uploadedBy:"TIE", downloads:780, url:"https://www.tie.go.tz/uploads/documents/sw-1727267339-ACCOUNTANCY%20SYLLABUS%20FOR%20ADVANCED%20SECONDARY%20EDUCATION%20FORM%20V%20-%20VI%20FINAL%20.pdf"},
         { id:23, title:"Textile and garment Syllabus Form 5&6", subject:"Textile and garment", form:"Form 5&6", year:2023, type:"Syllabus", uploadedBy:"TIE", downloads:780, url:"https://www.tie.go.tz/uploads/documents/sw-1727267544-ADVANCED%20-TEXTILES%20AND%20GARMENT%20CONSTRUCTIO%20FM%20V-VI%20FINAL.pdf"},
      { id:24, title:"Scheme of Work and Lesson Plan for all subjects new and old curriculums", subject:"All Subjects", form:"Form 1-4", year:2024, type:"Scheme of Work", uploadedBy:"Jihudumieschool", downloads:2500, url:"https://www.jihudumieschool.com/p/form-three-documents.html"},
            { id:25, title:"Lesson Plan and Scheme of Work for all subjects new and old curriculums", subject:"All Subjects", form:"Form 1-4", year:2024, type:"Lesson Plan", uploadedBy:"Jihudumieschool", downloads:2500, url:"https://www.jihudumieschool.com/p/form-three-documents.html"},
       { id:26, title:"Form 1 Examinations From All regions", subject:"All Subjects", form:"Form 1", year:2025, type:"Past Paper", uploadedBy:"Darasa Huru", downloads:2500, url:"https://darasahuru.ac.tz/category/exams-secondary/form-i-exams/"},
        { id:27, title:"Form 2 Examinations From All regions", subject:"All Subjects", form:"Form 2", year:2025, type:"Past Paper", uploadedBy:"Darasa Huru", downloads:2500, url:"https://darasahuru.ac.tz/category/exams-secondary/form-ii-exams/"},
         { id:28, title:"Form 3 Examinations From All regions", subject:"All Subjects", form:"Form 3", year:2025, type:"Past Paper", uploadedBy:"Darasa Huru", downloads:2500, url:"https://darasahuru.ac.tz/category/exams-secondary/form-iii-exams/"},
          { id:29, title:"Form 4 Examinations From All regions", subject:"All Subjects", form:"Form 4", year:2025, type:"Past Paper", uploadedBy:"Darasa Huru", downloads:2500, url:"https://darasahuru.ac.tz/category/exams-secondary/form-iv-exams/"},
           { id:30, title:"Form 5 Examinations Jecas with marking Scheme", subject:"All Subjects", form:"Form 5", year:2023, type:"Past Paper", uploadedBy:"Darasa Huru", downloads:2500, url:"https://darasahuru.ac.tz/form-five-annual-examinations-2024-jecas-with-marking-schemes/"},
            { id:31, title:"Form 6 Examinations Tahisco with marking Scheme", subject:"All Subjects", form:"Form 6", year:2023, type:"Past Paper", uploadedBy:"Darasa Huru", downloads:2500, url:"https://darasahuru.ac.tz/form-six-inter-islamic-mock-exams-2025/"},
        { id:32, title:"Form 6 Joint Examinations Southern Lindi Mtwara..", subject:"All Subjects", form:"Form 5", year:2023, type:"Past Paper", uploadedBy:"Darasa Huru", downloads:2500, url:"https://darasahuru.ac.tz/form-five-joint-annual-examination-2023-with-marking-schemes/"},
         { id:31, title:"Form 5&6 Examinations From All regions with marking Schemes", subject:"All Subjects", form:"Form 5&6", year:2023, type:"Past Paper", uploadedBy:"Darasa Huru", downloads:2500, url:"https://darasahuru.ac.tz/form-five-and-six-examinations-for-advanced-level/"},
         { id:31, title:"Civics Form 1-4 syllabus", subject:"Civics", form:"Form 1-4", year:2023, type:"Sylabus", uploadedBy:"DarasaHuru.net", downloads:2500, url:"https://darasahuru.net/docs/civics/civics-syllabus/"},
         { id:32, title:"Syllabus Zote za zamani search kupitia DarasaHuru.net", subject:"All Subjects", form:"Form 1-4", year:2005, type:"Syllabus", uploadedBy:"DarasaHuru.net", downloads:2500, url:"https://darasahuru.net/"},
         { id:33, title:"Form 4 Pre-Necta Examinations ", subject:"All Subjects", form:"Form 4", year:2025, type:"Past Paper", uploadedBy:"Msomi Bora", downloads:2500, url:"https://www.msomibora.com/2025/10/pre-necta-exams-form-four-2025-all-regions-all-subjects/"},
          { id:33, title:"Form 2 Pre-Necta Examinations ", subject:"All Subjects", form:"Form 2", year:2025, type:"Past Paper", uploadedBy:"Msomi Bora", downloads:2500, url:"https://www.msomibora.com/2025/10/pre-necta-exams-form-two-2025-all-regions-all-subjects/"},
           { id:33, title:"Form 4 Pre-Necta Examinations ", subject:"All Subjects", form:"Form 4", year:2025, type:"Past Paper", uploadedBy:"Msomi Bora", downloads:2500, url:"#"},
            { id:33, title:"Form 4 Pre-Necta Examinations ", subject:"All Subjects", form:"Form 4", year:2025, type:"Past Paper", uploadedBy:"Msomi Bora", downloads:2500, url:"#"},
             { id:33, title:"Form 4 Pre-Necta Examinations ", subject:"All Subjects", form:"Form 4", year:2025, type:"Past Paper", uploadedBy:"Msomi Bora", downloads:2500, url:"#"},
         { id:31, title:"Form 6 Examinations Tahisco with marking Scheme", subject:"All Subjects", form:"Form 6", year:2023, type:"Past Paper", uploadedBy:"Darasa Huru", downloads:2500, url:"#"},
         { id:14, title:"Physics NECTA Past Paper 2022 (Marking Scheme)", subject:"Physics", form:"Form 1", year:2023, type:"Syllabus", uploadedBy:"TIE", downloads:2500, url:"#"},
      { id:14, title:"Kiswahili Syllabus & Guide 2021", subject:"Kiswahili", form:"Form 1", year:2021, type:"Syllabus", uploadedBy:"Mwl. Zawadi Kombo", downloads:780, url:"#"},
         { id:6, title:"Biology Study Guide - Genetics", subject:"Biology", form:"Form 5", year:2024, type:"Study Guide", uploadedBy:"Mwl. Neema David", downloads:1560, url:"#"},
      { id:6, title:"Biology Study Guide - Genetics", subject:"Biology", form:"Form 5", year:2024, type:"Study Guide", uploadedBy:"Mwl. Neema David", downloads:1560, url:"#"},
      { id:7, title:"Chemistry Form 3 Topical Questions", subject:"Chemistry", form:"Form 3", year:2023, type:"Teaching Aid", uploadedBy:"Mwl. Baraka John", downloads:670, url:"#"},
      { id:8, title:"History Lesson Plan - Colonialism in Africa", subject:"History", form:"Form 2", year:2024, type:"Lesson Plan", uploadedBy:"Mwl. Amina Saidi", downloads:430, url:"#"},
      { id:9, title:"Geography NECTA Past Paper 2023", subject:"Geography", form:"Form 4", year:2023, type:"Past Paper", uploadedBy:"Mwl. Oscar Kibona", downloads:1800, url:"#"},
      { id:10, title:"Civics Form 1 Notes - Good Citizenship", subject:"Civics", form:"Form 1", year:2022, type:"Lesson Notes", uploadedBy:"Mwl. Lilian Msangi", downloads:550, url:"#"},
      { id:11, title:"English Literature - The Old Man and The Sea (Summary)", subject:"Literature", form:"Form 6", year:2024, type:"Study Guide", uploadedBy:"Mwl. Grace Mushi", downloads:980, url:"#"}
    ];

    // ---------- DOM references ----------
    const docsContainer = document.getElementById('docsContainer');
    const qInput = document.getElementById('q');
    const subjectFilter = document.getElementById('subjectFilter');
    const formFilter = document.getElementById('formFilter');
    const typeFilter = document.getElementById('typeFilter');
    const clearBtn = document.getElementById('clearBtn');

    // Populate subject filter dynamically
    (function populateSubjects(){
      const subs = Array.from(new Set(docs.map(d=>d.subject))).sort();
      subs.forEach(s=>{
        const opt = document.createElement('option');
        opt.value = s; opt.textContent = s;
        subjectFilter.appendChild(opt);
      });
    })();

    // Render documents
    function render(list){
      docsContainer.innerHTML = '';
      if(!list.length){
        docsContainer.innerHTML = '<div style="padding:40px;text-align:center;color:var(--muted);border-radius:10px;background:linear-gradient(180deg, rgba(37,99,235,0.02), transparent);">No documents match your query.</div>';
        return;
      }
      list.forEach(d=>{
        const card = document.createElement('article');
        card.className = 'doc-card';
        card.innerHTML = `
          <div class="doc-head">
            <div class="doc-icon">${(d.subject||'') .slice(0,2).toUpperCase()}</div>
            <div style="flex:1">
              <h3 class="doc-title">${escapeHtml(d.title)}</h3>
              <div class="doc-meta">${escapeHtml(d.subject)} • ${escapeHtml(d.form)} • ${d.year}</div>
              <div class="doc-meta" style="margin-top:6px;font-size:13px;color:var(--muted)"><em>${escapeHtml(d.type)}</em> • ${escapeHtml(d.uploadedBy)} • ${d.downloads.toLocaleString()} downloads</div>
            </div>
          </div>

          <div class="doc-actions">
            <div class="tag">${escapeHtml(d.type)}</div>
            <div style="display:flex;gap:8px;align-items:center">
              <button class="share" onclick="shareDoc(${d.id})" title="Share"><i class="fas fa-share-alt"></i></button>
              <button class="download" onclick="downloadDoc(${d.id})"><i class="fas fa-file-arrow-down"></i> Download</button>
            </div>
          </div>
        `;
        docsContainer.appendChild(card);
      });
    }

    // Safe escape
    function escapeHtml(s){ return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;') }

    // Filtering logic
    function applyFilters(){
      const q = (qInput.value || '').trim().toLowerCase();
      const subject = subjectFilter.value;
      const form = formFilter.value;
      const type = typeFilter.value;

      let res = docs.filter(d=>{
        const matchesQ = !q || [d.title,d.subject,d.type,d.uploadedBy,String(d.year)].join(' ').toLowerCase().includes(q);
        const matchesSubject = !subject || d.subject === subject;
        const matchesForm = !form || d.form === form;
        const matchesType = !type || d.type === type;
        return matchesQ && matchesSubject && matchesForm && matchesType;
      });

      // Sort: popular first
      res.sort((a,b)=>b.downloads - a.downloads);
      render(res);
    }

    // Share (WhatsApp quick share)
    function shareDoc(id){
      const d = docs.find(x=>x.id===id);
      if(!d) return;
      const text = encodeURIComponent(`Check this document: ${d.title} (${d.type}) - Eunline Docs`);
      window.open(`https://wa.me/?text=${text}`,'_blank');
    }
    window.shareDoc = shareDoc;

    // Download (open URL or simulate)
    function downloadDoc(id){
      const d = docs.find(x=>x.id===id);
      if(!d) return;
      // If real URL available, open; else show quick simulated download (replace with real link)
      if(d.url && d.url !== '#'){
        window.open(d.url,'_blank');
      } else {
        // Simulated: create blob + download (demo)
        const content = `Document: ${d.title}\nType: ${d.type}\nSubject: ${d.subject}\nYear: ${d.year}\nUploaded by: ${d.uploadedBy}`;
        const blob = new Blob([content], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${d.title.replace(/\s+/g,'_')}.txt`;
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
      }
    }// Open document externally (browser tab / external app)
function downloadDoc(id) {
  const d = docs.find(x => x.id === id);
  if (!d) return;

  if (d.url && d.url !== '#') {
    // Ensure full external open (browser tab)
    const link = document.createElement('a');
    link.href = d.url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    link.remove();
  } else {
    // fallback demo download if no link provided
    const content = `Document: ${d.title}\nType: ${d.type}\nSubject: ${d.subject}\nYear: ${d.year}\nUploaded by: ${d.uploadedBy}`;
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${d.title.replace(/\s+/g, '_')}.txt`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }
}

    window.downloadDoc = downloadDoc;

    // Events
    qInput.addEventListener('input', applyFilters);
    subjectFilter.addEventListener('change', applyFilters);
    formFilter.addEventListener('change', applyFilters);
    typeFilter.addEventListener('change', applyFilters);
    clearBtn.addEventListener('click', applyFilters);

    // Init render
    render(docs);

    // ---------- Theme toggle (header) ----------
    const themeBtn = document.getElementById('themeBtn');
    const themeFooterBtn = document.getElementById('themeFooterBtn');
    function setTheme(isDark){
      if(isDark){
        document.documentElement.setAttribute('data-theme','dark');
        try{ localStorage.setItem('eunline_theme','dark') }catch(e){}
        themeBtn.innerHTML = '<i class="fas fa-sun"></i>';
        themeFooterBtn.innerHTML = '<i class="fas fa-sun"></i> Toggle Theme';
      } else {
        document.documentElement.removeAttribute('data-theme');
        try{ localStorage.setItem('eunline_theme','light') }catch(e){}
        themeBtn.innerHTML = '<i class="fas fa-moon"></i>';
        themeFooterBtn.innerHTML = '<i class="fas fa-moon"></i> Toggle Theme';
      }
    }
    // init theme
    (function(){
      const saved = (localStorage.getItem('eunline_theme')||'').toLowerCase();
      if(saved === 'dark'){ setTheme(true); }
      else if(saved === 'light'){ setTheme(false); }
      else {
        const prefers = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        setTheme(prefers);
      }
    })();
    themeBtn.addEventListener('click', ()=> setTheme(document.documentElement.getAttribute('data-theme') !== 'dark'));
    themeFooterBtn.addEventListener('click', ()=> setTheme(document.documentElement.getAttribute('data-theme') !== 'dark'));

    // Mobile menu toggle
    const mobileBtn = document.getElementById('mobileBtn');
    const topnav = document.getElementById('topnav');
    mobileBtn.addEventListener('click', ()=> topnav.classList.toggle('show'));

    // Year
    document.getElementById('year').textContent = new Date().getFullYear?.() || (new Date()).getFullYear();

    // Accessibility: allow Enter to trigger search button
    clearBtn.addEventListener('keydown', (e)=>{ if(e.key === 'Enter') applyFilters(); });
    
    // Simulated unread count (could be from server)
const unreadCount = 2; // Example
const notifBadge = document.getElementById('notifBadge');
const notifBtn = document.getElementById('notifBtn');

if (unreadCount > 0) {
  notifBadge.textContent = unreadCount;
  notifBadge.style.display = 'inline-block';
}

// Link to notifications page
notifBtn.addEventListener('click', () => {
  window.location.href = 'notifications.html';
});