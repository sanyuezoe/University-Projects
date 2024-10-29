const MAtableData = {
    who: [
        { property: "Creator", dcore:"dc:creator", schema: "schema:creator<br>schema:director", iptc: "creator", lido: "actorInRole", mods: "modsrdf:name<br>modsrdf:creator", marc21: "100 1# $a - Personal name<br>700 1# $a - Personal name" },
        { property: "Publisher", dcore:"dc:publisher", schema: "schema:publisher", iptc: "Supplier", lido: "creditLine", mods: "modsrdf:publisher", marc21: "264#1$b - Name of producer, publisher" },
        { property: "Institution", dcore:"dc:rightsHolder", schema: "schema:organization", iptc: "N/A", lido: "legalBodyName", mods: "N/A", marc21: "710 - Added Entry-Corporate Name" },
        { property: "Contributor", dcore:"dc:contributor", schema: "schema:contributor", iptc: "contributor", lido: "actorInRole", mods: "modsrdf:name", marc21: "700 1# $a - Personal name" },
        { property: "Person shown", dcore:"dc:subject", schema: "N/A", iptc: "personInImage", lido: "subjectActor", mods: "N/A", marc21: "N/A" },
        { property: "Recipient", dcore:"N/A",schema: "schema:recipient", iptc: "N/A", lido: "N/A", mods: "N/A", marc21: "N/A" },
    ],
    where: [
        { property: "Place of content", dcore:"dc:coverage", schema: "schema:contentLocation", iptc: "location", lido: "place", mods: "modsrdf:location", marc21: "N/A" },
        { property: "Place of creation", dcore:"dcterms:spatial", schema: "schema:locationCreated", iptc: "location", lido: "place", mods: "modsrdf:location", marc21: "N/A" },
        { property: "Place of publication", dcore:"dcterms:spatial", schema: "schema:location", iptc: "location", lido: "place", mods: "modsrdf:location", marc21: "264#0$a - Place of publication" },
        { property: "Place of preservation", dcore:"dc:source", schema: "schema:location", iptc: "location", lido: "place", mods: "modsrdf:location", marc21: "N/A" },
        { property: "Delivery Address", dcore:"N/A", schema: "schema:deliveryAddress", iptc: "location", lido: "place", mods: "modsrdf:location", marc21: "N/A" },
    ],
    when: [
        { property: "Date of publication", dcore:"dcterms:issued", schema: "schema:datePublished", iptc: "N/A", lido: "modsrdf:date", mods: "modsrdf:dateIssued", marc21: "264#1$c-Date of  publication" },
        { property: "Date of creation", dcore:"dcterms:created", schema: "schema:dateCreated", iptc: "dateCreated", lido: "modsrdf:date", mods: "modsrdf:dateCreated", marc21: "N/A" },
        { property: "Date of upload", dcore:"dc:date", schema: "schema:uploadDate", iptc: "N/A", lido: "modsrdf:date", mods: "modsrdf:dateOther", marc21: "N/A" },
    ],
    what: [
        { property: "Title", dcore:"dc:title", schema: "schema:name", iptc: "title", lido: "appellationValue", mods: "modsrdf:title", marc21: "130$a- Uniform title" },
        { property: "Identifier", dcore:"dc:identifier", schema: "schema:identifier", iptc: "N/A", lido: "N/A", mods: "mods:identifier", marc21: "020$a - International Standard Book Number" },
        { property: "Description", dcore:"dc:description", schema: "schema:description", iptc: "description", lido: "N/A", mods: "modsrdf:abstract", marc21: "520$a - Summary" },
        { property: "Subject", dcore:"dc:subject", schema: "schema:about", iptc: "keywords", lido: "subject", mods: "modsrdf:subject", marc21: "N/A" },
        { property: "Language", dcore:"dc:language", schema: "schema:inLanguage", iptc: "N/A", lido: "N/A", mods: "modsrdf:language", marc21: "N/A" },
        { property: "URL", dcore:"N/A", schema: "schema:url", iptc: "N/A", lido: "N/A", mods: "modsrdf:url", marc21: "N/A" },
        { property: "Type", dcore:"dc:type", schema: "schema:genre", iptc: "N/A", lido: "category", mods: "modsrdf:typeOfResource", marc21: "336$a - Content type term" },
    ],

};

const MDtableData = {
    "video": [
        { subject: "Incident Video Clip", predicate: "crm: P14_carried_out_by", object: "徐州一修哥" },
        { subject: "徐州一修哥", predicate: "dcterms:spatial", object: "Douyin" },
        { subject: "Incident Video Clip", predicate: "crm:P129_is_about", object: "The Chained Woman" },
        { subject: "Incident Video Clip", predicate: "crm: P7_took_place_at ", object: "Xuzhou" },
        { subject: "Xuzhou", predicate: "owl:sameAs", object: "https://dbpedia.org/page/Xuzhou" },
        { subject: "Incident Video Clip", predicate: "crm:P55_has_current_location", object: "YouTube" },
        { subject: "Incident Video Clip", predicate: "schema:uploadDate", object: "26/01/2020" },
        { subject: "Incident Video Clip", predicate: "crm:P2_has_type", object: "Video" },
        { subject: "Incident Video Clip", predicate: "schema:url", object: "https://www.youtube.com/watch?v=5npkIJ6NRr4" },

    ],
    "statements": [
        { subject: "Official Statements", predicate: "crm:P94_has_created", object: "Fengxian/Xuzhou Investigation Team" },
        { subject: "Official Statements", predicate: "dcterms:publisher", object: "Fengxian/Xuzhou Investigation Team" },
        { subject: "Official Statements", predicate: "crm: P105_right_held_by", object: "Fengxian/Xuzhou Investigation Team" },
        { subject: "Official Statements", predicate: "dcterms:spatial", object: "Xuzhou" },
        { subject: "Official Statements", predicate: "dcterms:issued", object: "28/01/2020" },
        { subject: "Official Statements", predicate: "dcterms:valid", object: "23/02/2020" },
        { subject: "Official Statements", predicate: "crm:P2_has_type", object: "Text" },
        { subject: "Official Statements", predicate: "crm:P72_has_Title", object: "关于网民反映“生育八孩女子”情况通报" },
        { subject: "Official Statements", predicate: "crm:P72:has_Language", object: "Chinese" },
        { subject: "Official Statements", predicate: "dcterms:references", object: "Xuzhou Chained Woman Incident" }
    ],
    "article": [
        { subject: "Article on the Punishment for Buying Women", predicate: "dc:creator", object: "Luo Xiang" },
        { subject: "Luo Xiang", predicate: "foaf:member", object: "China University of Political Science and Law" },
        { subject: "Article on the Punishment for Buying Women", predicate: "dcterms:spatial", object: "Wechat" },
        { subject: "Article on the Punishment for Buying Women", predicate: "schema:datePublished", object: "07/02/2020" },
        { subject: "Article on the Punishment for Buying Women", predicate: "crm:P2_has_type", object: "Text" },
        { subject: "Article on the Punishment for Buying Women", predicate: "crm:P72_has_Title", object: "Why Do I Still Advocate for Harsher Penalties for the Crime of Buying Women and Children?" },
        { subject: "Article on the Punishment for Buying Women", predicate: "crm:P72:has_Language", object: "Chinese" },
        { subject: "Article on the Punishment for Buying Women", predicate: "schema:url", object: "https://mp.weixin.qq.com/s/UUwTBaeSCU5Rw_fSKNSZMw" },
        { subject: "Article on the Punishment for Buying Women", predicate: "dc:subject", object: "Human Trafficking" },
        
    ],
    "exhibition": [
        { subject: "Online Exhibition", predicate: "dc:contributor", object: "Zhang Qiongfei" },
        { subject: "Online Exhibition", predicate: "crm:P14_carried_out_by", object: "Chinese Feminist Artists Group" },
        { subject: "Zhang Qiongfei", predicate: "crm:P9_consists_of", object: "Chinese Feminist Artists Group" },
        { subject: "Online Exhibition", predicate: "crm:P50_has_current_keeper", object: "Chinese Feminist Artists Alliance" },
        { subject: "Online Exhibition", predicate: "schema:datePublished", object: "08/02/2020" },
        { subject: "Online Exhibition", predicate: "crm:P2_has_type", object: "Artwork" },
        { subject: "Online Exhibition", predicate: "crm:P72_has_Title", object: "Break the Chain" }
    ],
    "street art": [
        { subject: "Street Art of Chained Woman", predicate: "dc:creator", object: "@Jorsin-" },
        { subject: "Street Art of Chained Woman", predicate: "dc:creator", object: "@Revos_one" },
        { subject: "Street Art of Chained Woman", predicate: "schema:locationCreated", object: "Tianjin" },
        { subject: "Tianjin", predicate: "owl:sameAs", object: "https://dbpedia.org/page/Tianjin" },
        { subject: "Street Art of Chained Woman", predicate: "dcterms:spatial", object: "Weibo" },
        { subject: "Street Art of Chained Woman", predicate: "crm:P55_has_current_location", object: "Instagram" },
        { subject: "Street Art of Chained Woman", predicate: "schema:dateCreated", object: "05/03/2020" },
        { subject: "Street Art of Chained Woman", predicate: "crm:P2_has_type", object: "Street Art" }
    ],
    "social media posts": [
        { subject: "Series of Posts by Volunteer Wuyi", predicate: "dc:creator", object: "Wuyi" },
        { subject: "Series of Posts by Volunteer Wuyi", predicate: "dcterms:issued", object: "07/02/2020" },
        { subject: "Series of Posts by Volunteer Wuyi", predicate: "dcterms:valid", object: "22/02/2020" },
        { subject: "Series of Posts by Volunteer Wuyi", predicate: "schema:contentLocation", object: "Xuzhou" },
        { subject: "Series of Posts by Volunteer Wuyi", predicate: "dcterms:spatial", object: "Weibo" },
        { subject: "Series of Posts by Volunteer Wuyi", predicate: "crm:P55_has_current_location", object: "China Digital Times" },
        { subject: "Series of Posts by Volunteer Wuyi", predicate: "crm:P2_has_type", object: "Digital Text" },
        { subject: "Series of Posts by Volunteer Wuyi", predicate: "crm:P72:has_Language", object: "Chinese" }
    ],
    "digital image": [
        { subject: "Li Ying's story", predicate: "dc:subject", object: "Li Ying" },
        { subject: "Li Ying's story", predicate: "crm: P14_carried_out_by", object: "想看法桑起床" },
        { subject: "Li Ying's story", predicate: "dcterms:spatial", object: "Weibo" },
        { subject: "Li Ying's story", predicate: "crm:P55_has_current_location", object: "China Digital Times" },
        { subject: "China Digital Times", predicate: "owl:sameAs", object: "https://dbpedia.org/page/China_Digital_Times" },
        { subject: "Li Ying's story", predicate: "schema:uploadDate", object: "29/01/2020" },
        { subject: "Li Ying's story", predicate: "crm:P2_has_type", object: "Digital Image" }
    ],
    "movie": [
        { subject: "Movie: Blind Mountain", predicate: "schema:director", object: "Li Yang" },
        { subject: "Li Yang", predicate: "owl:sameAs", object: "https://dbpedia.org/page/Li_Yang_(director)" },
        { subject: "Movie: Blind Mountain", predicate: "dc:publisher", object: "Kun Peng Xing Yun Cultural Development" },
        { subject: "Movie: Blind Mountain", predicate: "schema:datePublished", object: "02/05/2007" },
        { subject: "Movie: Blind Mountain", predicate: "schema:locationCreated", object: "Shannxi" },
        { subject: "Shannxi", predicate: "owl:sameAs", object: "https://dbpedia.org/page/Shaanxi" },
        { subject: "Movie: Blind Mountain", predicate: "crm:P2_has_type", object: "Movie" },
        { subject: "Movie: Blind Mountain", predicate: "crm:P72_has_Title", object: "Blind Mountain" },
        { subject: "Movie: Blind Mountain", predicate: "crm:P72:has_Language", object: "Chinese" },
        { subject: "Movie: Blind Mountain", predicate: "schema:duration", object: "95min." },
        { subject: "Movie: Blind Mountain", predicate: "owl:sameAs", object: "https://dbpedia.org/page/Blind_Mountain" }
    ],
    "book": [
        { subject: "Book: Human Trafficking", predicate: "dc:creator", object: "Margaret Malloch" },
        { subject: "Book: Human Trafficking", predicate: "dc:contributor", object: " Stefano Bonino" },
        { subject: "Book: Human Trafficking", predicate: "dc:contributor", object: " Hazel Cameron" },
        { subject: "Book: Human Trafficking", predicate: "dc:contributor", object: " Claire Cody" },
        { subject: "Book: Human Trafficking", predicate: "dcterms:publisher", object: "Edinburgh University Press" },
        { subject: "Book: Human Trafficking", predicate: "schema:datePublished", object: "01/08/2017" },
        { subject: "Book: Human Trafficking", predicate: "crm:P2_has_type", object: "Book" },
        { subject: "Book: Human Trafficking", predicate: "crm:P72_has_Title", object: "Human Trafficking: The Complexities of Exploitation" },
        { subject: "Book: Human Trafficking", predicate: "crm:P72:has_Language", object: "English" },
        { subject: "Book: Human Trafficking", predicate: "crm:P1_is_identified_by", object: "ISBN-10:1474401120" }
    ],
    "letter": [
        { subject: "Joint Petition Letter ", predicate: "crm: P14_carried_out_by", object: "Shudong1984" },
        { subject: "Joint Petition Letter ", predicate: "crm: P105_right_held_by", object: "State Bureau for Letters and Visits" },
        { subject: "Joint Petition Letter ", predicate: "schema:datePublished", object: "20/04/2020" },
        { subject: "Joint Petition Letter ", predicate: "schema:dateCreated", object: "08/03/2020" },
        { subject: "Joint Petition Letter ", predicate: "crm:P2_has_type", object: "Letter" },
        { subject: "Joint Petition Letter ", predicate: "crm:P72_has_Title", object: "彻查徐州铁链女事件 保障公民免于恐惧的自由 呼吁书" },
        { subject: "Joint Petition Letter ", predicate: "crm:P72:has_Language", object: "Chinese" },
        { subject: "Joint Petition Letter ", predicate: "crm:P16_used_specific_object", object: "Petition" }
    ],

}

function showTable1(tableType1) {
    const tableBody1 = document.getElementById("MA-table-body");
    tableBody1.innerHTML = "";

    MAtableData[tableType1].forEach(item => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <th>${item.property}</th>
            <th>${item.dcore}</th>
            <th>${item.schema}</th>
            <th>${item.iptc}</th>
            <th>${item.lido}</th>
            <th>${item.mods}</th>
            <th>${item.marc21}</th>
        `;

        tableBody1.appendChild(row);
    });

    // Remove "active" class from all MA buttons and add it to the selected one
    document.querySelectorAll(".MA-control-button").forEach(button => {
        button.classList.remove("active");
    });
    document.querySelector(`.MA-control-button[data-table-type="${tableType1}"]`).classList.add("active");
}

showTable1('who');

function showTable2(tableType2) {
    const tableBody2 = document.getElementById("MD-table-body");
    tableBody2.innerHTML = "";

    MDtableData[tableType2].forEach(item => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <th>${item.subject}</th>
            <th>${item.predicate}</th>
            <th>${item.object}</th>
        `;

        tableBody2.appendChild(row);
    });

    // Remove "active" class from all MD buttons and add it to the selected one
    document.querySelectorAll(".MD-control-button").forEach(button => {
        button.classList.remove("active");
    });
    document.querySelector(`.MD-control-button[data-table-type="${tableType2}"]`).classList.add("active");
}

showTable2('video');