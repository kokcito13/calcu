// JavaScript Document

/*Прайс один оттиск на ризо при печати форматом А4*/
var ottiskA4Cena = new Array();
ottiskA4Cena[50] =   0.1546;
ottiskA4Cena[100] = 0.1049;
ottiskA4Cena[200] = 0.08;
ottiskA4Cena[300] = 0.0717;
ottiskA4Cena[400] = 0.0676;
ottiskA4Cena[500] = 0.0651;
ottiskA4Cena[700] = 0.0622;
ottiskA4Cena[1000]=0.0601;
ottiskA4Cena[2000]=0.0576;
ottiskA4Cena[3000]=0.0568;
ottiskA4Cena[4000]=0.0564;
ottiskA4Cena[5000]=0.0561;

/*Прайс один оттиск на ризо при печати форматом А3*/
var ottiskA3Cena = new Array();
ottiskA3Cena[50] =   0.22;
ottiskA3Cena[100] = 0.1609;
ottiskA3Cena[200] = 0.1314;
ottiskA3Cena[300] = 0.1215;
ottiskA3Cena[400] = 0.1166;
ottiskA3Cena[500] = 0.1137;
ottiskA3Cena[700] = 0.1103;
ottiskA3Cena[1000]=0.1078;
ottiskA3Cena[2000]=0.1048;
ottiskA3Cena[3000]=0.1038;
ottiskA3Cena[4000]=0.1033;
ottiskA3Cena[5000]=0.1030;

/*Прайс на бумагу для Riso*/
var paperCena = new Array();
paperCena["woPaper"] = 0.0;
paperCena["A3w80"] = 0.14;
paperCena["A3с80"] = 0.374;
paperCena["A4w80"] = 0.07;
paperCena["A4с80"] = 0.174;
paperCena["A3w160"] = 0.36;
paperCena["A3с160"] = 0.748;
paperCena["A4w160"] = 0.18;
paperCena["A4с160"] = 0.348;

/*Прайс на бумагу для на Konica Minolta 6501 - цена за лист формата 64х90*/
var paperCenaCanon = new Array();
paperCenaCanon["woPaper"] = 0.0;
paperCenaCanon["mel150"] = 1.25;
paperCenaCanon["mel170"] = 1.40;
paperCenaCanon["mel200"] = 1.65;
paperCenaCanon["mel250"] = 1.90;
paperCenaCanon["mel300"] = 2.50;
paperCenaCanon["mel350"] = 3.00;
paperCenaCanon["raf150"] = 4.80;
paperCenaCanon["jac150"] = 18.00;
paperCenaCanon["col90"]=2.66;
paperCenaCanon["col100"]=3.18;
paperCenaCanon["col120"]=3.33;
paperCenaCanon["col160"]=3.96;
paperCenaCanon["col200"]=4.82;
paperCenaCanon["col220"]=5.66;
paperCenaCanon["col250"]=6.14;
paperCenaCanon["col280"]=6.47;
paperCenaCanon["col300"]=8.52;
paperCenaCanon["chr250"]=24.50;

/*Прайс на печать на на Konica Minolta 6501*/
var ottiskCanon = new Array();
ottiskCanon["A410"]=5.00;
ottiskCanon["A450"]=4.00;
ottiskCanon["A4100"]=2.00;
ottiskCanon["A310"]=10.00;
ottiskCanon["A350"]=7.50;
ottiskCanon["A3100"]=5.00;
ottiskCanon["A3P10"]=10.00;
ottiskCanon["A3P50"]=7.50;
ottiskCanon["A3P100"]=3.50;


function RisoCalcList() {
	
    var form1 = document.formRisoList; 											// ссылка на форму
    var tir = parseInt(form1.tirazh.value);											// значение тиража из формы
    var lFormat = form1.listFormat[form1.listFormat.selectedIndex].value;				// формат оригинала
    var ottCena=0, i=0;																		// цена оттиска, индекс в массиве прайса
    var paperVid = form1.Paper[form1.Paper.selectedIndex].value;
    var paperTotalCena;																	// цена бумаги в тираже
    var totalCena=0; 																			// общая стоимость

    switch (lFormat) {
        case "A3":																				// определяем цену оттиска от тиража из прайса А3
            if ((tir >= 50) && (tir <100 )) i=50;
            else if ((tir >= 100) && (tir <200 )) i=100;
            else if ((tir >= 200) && (tir <300 )) i=200;
            else if ((tir >= 300) && (tir <400 )) i=300;
            else if ((tir >= 400) && (tir <500 )) i=400;
            else if ((tir >= 500) && (tir <700 )) i=500;
            else if ((tir >= 700) && (tir <1000 )) i=700;
            else if ((tir >= 1000) && (tir <2000 )) i=1000;
            else if ((tir >= 2000) && (tir <3000 )) i=2000;
            else if ((tir >= 3000) && (tir <4000 )) i=3000;
            else if ((tir >= 4000) && (tir <5000 )) i=4000;
            else if (tir >= 5000) i=5000;
            ottCena=ottiskA3Cena[i];
            break;
        case "A4":																				// определяем цену оттиска от тиража из прайса А4
            if ((tir >= 50) && (tir <100 )) i=50;
            else if ((tir >= 100) && (tir <200 )) i=100;
            else if ((tir >= 200) && (tir <300 )) i=200;
            else if ((tir >= 300) && (tir <400 )) i=300;
            else if ((tir >= 400) && (tir <500 )) i=400;
            else if ((tir >= 500) && (tir <700 )) i=500;
            else if ((tir >= 700) && (tir <1000 )) i=700;
            else if ((tir >= 1000) && (tir <2000 )) i=1000;
            else if ((tir >= 2000) && (tir <3000 )) i=2000;
            else if ((tir >= 3000) && (tir <4000 )) i=3000;
            else if ((tir >= 4000) && (tir <5000 )) i=4000;
            else if (tir >= 5000) i=5000;
            ottCena=ottiskA4Cena[i];
            break;
        default:
            alert("error");
    }

    paperTotalCena=paperCena[paperVid]*tir*form1.nList.value;

    if (form1.Storona[1].checked)
        totalCena=paperTotalCena+ottCena*tir*form1.nList.value*2;
    else
        totalCena=paperTotalCena+ottCena*tir*form1.nList.value;
	
    form1.Result.value=totalCena;
}

/* Расчет раскладки изделий на листе при печати на Canon */
function spuskCanon () {

    var aPL, bPL; 		// ширина и длина печатного листа
    var aIZ, bIZ, var1, var2; 		// ширина и длина изделия, варианты раскладки 1 и 2
    var formCn = document.formCanonList; // ссылка на форму
    var paperFormat = formCn.formatPaperCn[formCn.formatPaperCn.selectedIndex].value;
    var zonaNP = 0; // зона непропечатки принтера
    var izdNaList;

    aIZ = parseInt(formCn.izdelieA.value)+parseInt(formCn.vylet.value)*2;
    bIZ = parseInt(formCn.izdelieB.value)+parseInt(formCn.vylet.value)*2;

    switch (paperFormat) {
        case "A4":
            aPL = 210-2*zonaNP;
            bPL = 297-2*zonaNP;
            break;
        case "A3":
            aPL = 297-2*zonaNP;
            bPL = 420-2*zonaNP;
            break;
        case "A3P":
            aPL = 320-2*zonaNP;
            bPL = 450-2*zonaNP;
            break;
    }

    var1 = Math.floor(aPL / aIZ) * Math.floor(bPL / bIZ);
    var2 = Math.floor(aPL / bIZ) * Math.floor(bPL / aIZ);
    izdNaList = (var1>var2) ? var1 : var2;

    formCn.izdelieNaList.value= izdNaList;

    return izdNaList;
}

/* Расчет печати листовой продукции при печати на Canon */
function CanonCalcList () {

    var izdNaList = spuskCanon();																// изделий на листе
    var formCn = document.formCanonList;												// ссылка на форму Кэнон
    var tirazh = parseInt(formCn.tirazhCanon.value);								// тираж изделий
    var tirazhList = tirazh<izdNaList ? 1 : Math.ceil(tirazh/izdNaList);		
    var cenaPaper=0; 																				// цена бумаги для тиража
    var forPap = formCn.formatPaperCn[formCn.formatPaperCn.selectedIndex].value;	// фомат бумаги
    var colorDruk = formCn.colorNum[formCn.colorNum.selectedIndex].value;	// цветность печати
    var vidPap = formCn.vidPaperCn[formCn.vidPaperCn.selectedIndex].value; 		// вид бумаги из формы
    var cenaOtt = 0; // цена оттиска при тираже
    var cenaTotal = 0;	// общая цена;

    switch (forPap) {
        case "A4":
            cenaPaper = paperCenaCanon[vidPap]/8*tirazhList;
            break;
        case "A3":
            cenaPaper = paperCenaCanon[vidPap]/4*tirazhList;
            break;
        case "A3P":
            cenaPaper = paperCenaCanon[vidPap]/4*tirazhList;
            break;
    }

    if (tirazhList > 0 && tirazhList <= 10) 
        cenaOtt = ottiskCanon[forPap+"10"];
    else if (tirazhList > 10 && tirazhList <= 50)
        cenaOtt = ottiskCanon[forPap+"50"];
    else
        cenaOtt = ottiskCanon[forPap+"100"];

    switch (colorDruk) {
        case "44":
            cenaTotal = cenaOtt*2*tirazhList+cenaPaper;
            break;
        case "40":
            cenaTotal = cenaOtt*tirazhList+cenaPaper;
            break;
        case "41":
            cenaTotal = cenaOtt*1.8*tirazhList+cenaPaper;
            break;
        case "11":
            cenaTotal = cenaOtt*1.6*tirazhList+cenaPaper;
            break;
        case "10":
            cenaTotal = cenaOtt*0.8*tirazhList+cenaPaper;
            break;
    } // switch

    formCn.cnResult.value = cenaTotal;
}
