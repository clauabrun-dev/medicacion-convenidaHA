const FINANCIADORES = {
  "Poder Judicial": {
    "color": "#6B4F3A",
    "vigencia": "15/06/2026",
    "archivo": "documentos/Poder_Judicial_2026-06-15.pdf"
  },
  "APOS La Rioja": {
    "color": "#8B1E3F",
    "vigencia": "Septiembre 2026 (propuesta)",
    "archivo": "documentos/APOS_La_Rioja_2026-09.pdf"
  },
  "APSOT": {
    "color": "#5B3F8C",
    "vigencia": "Listado abril 2025",
    "archivo": "documentos/APSOT_2025-04.pdf"
  },
  "ASE-Medifé": {
    "color": "#E65300",
    "vigencia": "Listado julio 2025",
    "archivo": "documentos/ASE_MEDIFE_2025-07.pdf"
  },
  "OSDE Alto Costo": {
    "nombre": "OSDE",
    "color": "#1546B8",
    "vigencia": "Listados de alto costo e internados",
    "categoriaPredeterminada": "Alto costo",
    "categorias": {
      "Alto costo": {
        "vigencia": "Junio 2025 y agosto 2026"
      },
      "Internados": {
        "vigencia": "Listado 2025",
        "archivo": "documentos/OSDE_Internados_2025.pdf"
      }
    },
    "archivos": [
      {
        "etiqueta": "Listado de alto costo (PDF)",
        "archivo": "documentos/OSDE_Alto_Costo_2025-06.pdf"
      },
      {
        "etiqueta": "Anexo oncológico agosto 2026 (Excel)",
        "archivo": "documentos/OSDE_Anexo_Oncologico_2026-08.xlsx"
      }
    ]
  },
  "Caja Notarial": {
    "color": "#00796B",
    "vigencia": "Listado julio 2026",
    "archivo": "documentos/Caja_Notarial_2026-07.pdf"
  },
  "Colegio de Escribanos de la Provincia": {
    "color": "#9A6700",
    "vigencia": "1 de julio (año no informado)",
    "archivo": "documentos/Colegio_Escribanos_Provincia.pdf"
  },
  "FEMÉDICA Alto Costo": {
    "color": "#B3261E",
    "vigencia": "Julio 2026",
    "archivo": "documentos/FEMEDICA_Alto_Costo_2026-07.pdf"
  },
  "IASEP Formosa": {
    "color": "#2E7D32",
    "vigencia": "1/9/2025",
    "archivo": "documentos/IASEP_Formosa_2025-09-01.pdf"
  },
  "INSSSEP Chaco": {
    "color": "#006A6A",
    "vigencia": "Listados general y trasplante",
    "categorias": {
      "General": {
        "vigencia": "20/7/2026",
        "archivo": "documentos/INSSSEP_Chaco_2026-07-20.pdf"
      },
      "Trasplante": {
        "vigencia": "Septiembre 2026",
        "archivo": "documentos/INSSSEP_Chaco_Trasplante_2026-09.pdf"
      }
    }
  },
  "MEDICUS": {
    "color": "#005B8F",
    "vigencia": "Julio 2026",
    "archivo": "documentos/MEDICUS_2026-07.pdf"
  },
  "OMINT": {
    "color": "#7A3E9D",
    "vigencia": "Actualización noviembre 2025 (documento base junio 2025)",
    "archivo": "documentos/OMINT_Actualizacion_2025-11.pdf"
  },
  "SEMPRE": {
    "color": "#C45100",
    "vigencia": "Propuesta (fecha no informada)",
    "archivo": "documentos/SEMPRE_Propuesta.pdf"
  },
  "REDBRIDGE": {
    "color": "#A3164A",
    "vigencia": "Propuesta octubre 2026",
    "archivo": "documentos/REDBRIDGE_2026-10.pdf"
  },
  "Swiss Medical": {
    "color": "#D21F3C",
    "vigencia": "Propuesta mayo 2026",
    "archivo": "documentos/Swiss_Medical_Propuesta_2026-05.pdf"
  }
};

const MEDICAMENTOS = [
  {
    "financiador": "Poder Judicial",
    "droga": "ACETATO DE LEUPROLIDE",
    "medicamento": "ELIGARD 22.5 MG KIT"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "ACETATO DE LEUPROLIDE",
    "medicamento": "ELIGARD 45 MG KIT X 1"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "ACETATO DE LEUPROLIDE",
    "medicamento": "LECTRUM 22,5 ML KIT"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "ACETATO DE LEUPROLIDE",
    "medicamento": "LECTRUM 3.75 MG KIT"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "ACETATO DE LEUPROLIDE",
    "medicamento": "LECTRUM 7.5 MG KIT"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "ACIDO ZOLEDRONICO",
    "medicamento": "ACIDO ZOLEDR.MICROSULES 4 MG AMP"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "ABEMACICLIB",
    "medicamento": "VERZENIO 150 MG COMP"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "ADALIMUMAB",
    "medicamento": "AMGEVITA 40MG/0.8ML AUTOINY X 2"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "ADALIMUMAB",
    "medicamento": "HUMIRA AC LAP AUTOINY 0.4ML X 2"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "ADALIMUMAB",
    "medicamento": "HUMIRA AC LAP AUTOINY 0.8ML X 1"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "ALBUMINA HUMANA",
    "medicamento": "INFINITY PHARMA"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "ALFILIBERCEPT",
    "medicamento": "EYLIA 40 mg / ml"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "ANASTROZOL",
    "medicamento": "ANASTROZOL 1 MG X 1 COMPR KEMEX"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "APREPITANT",
    "medicamento": "EMEND TRIPACK CAPS.X 1+CAPS.X2"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "ATEZOLIZUMAB",
    "medicamento": "TECENTRIQ 1200mg vial x 1 x 20 ml"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "ATEZOLIZUMAB",
    "medicamento": "TECENTRIQ 840 mg vial x 1 x 14 ml"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "AZACITIDINA",
    "medicamento": "AZAMEX 100 mg f.a.x 1"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "AZACITIDINA",
    "medicamento": "AZZA 100 mg iny.liof.f.a.x 1"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "AZACITIDINA",
    "medicamento": "AZACITIDINA LKM 100 MG AMP"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "BACILO DE CALMETTE GUERIN",
    "medicamento": "BCG CULTIVO SSI FCO AMP X 4"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "BACILO DE CALMETTE GUERIN",
    "medicamento": "CARCIVAC FCO AMP"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "BELATACEPT",
    "medicamento": "NULOJIX 250mg/vial pvo.liof.x 1"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "BENDAMUSTINA",
    "medicamento": "BENDAMUSTINA KEMEX 100 MG FAMP"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "BENDAMUSTINA",
    "medicamento": "BENDAMUSTINA MICROSULES 100 MG FAMP"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "BENDAMUSTINA",
    "medicamento": "BENDAMUSTINA MICROSULES 25 MG FAMP"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "BENDAMUSTINA",
    "medicamento": "BENDAMUSTINA VARIFARMA 100 MG FAMP"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "BENDAMUSTINA",
    "medicamento": "BENDAMUSTINA VARIFARMA 25 MG FAMP"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "BENDAMUSTINA",
    "medicamento": "BENDAMUSTINA BIOPROFARMA 25 MG FAMP"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "BEVACIZUMAB",
    "medicamento": "AVASTIN 100 MG/4 ML AMP"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "BEVACIZUMAB",
    "medicamento": "AVASTIN 400 MG/16 ML AMP"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "BEVACIZUMAB",
    "medicamento": "BEVAX 100 mg vial x 1 x 4 ml"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "BEVACIZUMAB",
    "medicamento": "BEVAX 400 mg vial x 1 x 16 ml"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "BEVACIZUMAB",
    "medicamento": "ZIRAVEB 100 mg/4 ml a.x 1"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "BEVACIZUMAB",
    "medicamento": "ZIRAVEB 400 mg/16 ml a.x 1"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "BLEOMICINA",
    "medicamento": "BLEOMICINA SULF IVAX 15 U FCO AMP"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "BLEOMICINA",
    "medicamento": "BLEOMICINA 15 U LKM FCO AMP"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "BORTEZOMIB",
    "medicamento": "BORATER 3.5 mg f.a.x 1"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "BORTEZOMIB",
    "medicamento": "BORTMEX 3.5 MG INY"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "BORTEZOMIB",
    "medicamento": "GYSATY 3.5 mg f.a.x 1"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "BRENTUXIMAB VEDOTIN",
    "medicamento": "ADCETRIS 50 MG FCO AMP"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "BUSULFAN",
    "medicamento": "BUSULFAN 60 mg f.a.x 8 x 10 ml"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "CABAZITAXEl",
    "medicamento": "BLACKXELL 60 MG F/A"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "CABAZITAXEL",
    "medicamento": "CABAZIL FA 1.5ML + DILUY"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "CARBOPLATINO",
    "medicamento": "CARBOPLATINO 150 MG KEMEX F.A"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "CARBOPLATINO",
    "medicamento": "CARBOPLATINO 150 MG MICROSULES F.A"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "CARBOPLATINO",
    "medicamento": "CARBOPLATINO 450 MG TEVA FCO AMP (TUTEUR)"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "CARBOPLATINO",
    "medicamento": "CARBOPLATINO GLENMARK 150 MG INY."
  },
  {
    "financiador": "Poder Judicial",
    "droga": "CARBOPLATINO",
    "medicamento": "CARBOPLATINO GLENMARK 450 MG INY."
  },
  {
    "financiador": "Poder Judicial",
    "droga": "CARBOPLATINO",
    "medicamento": "CARBOPLATINO 150MG TUTEUR LIOF"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "CARBOPLATINO",
    "medicamento": "CARBOPLATINO 450 MG KEMEX F.A"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "CARBOPLATINO",
    "medicamento": "CARBOPLATINO 450 MG MICROSULES F.A"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "CARBOPLATINO",
    "medicamento": "CARBOPLATINO LKM 150 MG"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "CARFILZOMIB",
    "medicamento": "ALCAF 60 MG"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "CARFILZOMIB",
    "medicamento": "CARFIZOL FAMP"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "CARFILZOMIB",
    "medicamento": "FILZOCAR 60 MG TUTEUR"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "CETUXIMAB",
    "medicamento": "ERBITUX X 1 VIAL X 100 ML"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "CETUXIMAB",
    "medicamento": "ERBITUX X 1 VIAL X 20 ML"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "CICLOFOSFAMIDA",
    "medicamento": "CICLOFOSFAMIDA 1 GR FAMP GP PHARM"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "CICLOFOSFAMIDA",
    "medicamento": "CICLOFOSFAMIDA 200 MG FA GPPHARM"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "CICLOFOSFAMIDA",
    "medicamento": "CICLOFOSFAMIDA LKM 1GR FA"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "CICLOFOSFAMIDA",
    "medicamento": "CICLOFOSFAMIDA MICROSULES 1GR"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "CICLOFOSFAMIDA",
    "medicamento": "CICLOFOSFAMIDA MICROSULES 200 MG"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "CISPLATINO",
    "medicamento": "CISPLATINO 10 MG FCO AMP TUTEUR"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "CISPLATINO",
    "medicamento": "CISPLATINO 50 MG FCO AMP TUTEUR"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "CISPLATINO",
    "medicamento": "CISPLATINO 50 MG KEMEX AMP"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "CISPLATINO",
    "medicamento": "CISPLATINO 50 MG MICROSULES AMP"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "CITARABINA",
    "medicamento": "CITARABINA MICROSULES 100 MG FA"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "CITARABINA",
    "medicamento": "CITARABINA MICROSULES 1000 MG FA"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "DACARBAZINA",
    "medicamento": "DACARBAZINA VARIFARMA 200 MG AMP."
  },
  {
    "financiador": "Poder Judicial",
    "droga": "DACARBAZINA",
    "medicamento": "ONCOCARBIL 200 200 MG INY.LIOF.F.A.X 1"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "DARATUMUMAB",
    "medicamento": "DARZALEX 100 MG/5 ML x 1"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "DARATUMUMAB",
    "medicamento": "DARZALEX 400 MG/20 ML x 1"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "DARATUMUMAB",
    "medicamento": "DARZALEX SC 1800 MG/15 ML"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "DECITABINA",
    "medicamento": "SIGNUM 50 ML FCO.AMP x 1"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "DECITABINE",
    "medicamento": "DETAVI 50MG AMP"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "DEGARELIX",
    "medicamento": "FIRMAGON 120MG FA X 2"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "DEGARELIX",
    "medicamento": "FIRMAGON 80MG FA"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "DENOSUMAB",
    "medicamento": "PROLIA 60 MG/ML JGA PRELL"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "DENOSUMAB",
    "medicamento": "XGEVA 70MG/ML INY"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "DOCETAXEL",
    "medicamento": "DOCETAXEL 20 MG KEMEX FAMP"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "DOCETAXEL",
    "medicamento": "DOCETAXEL 20MG AMP MICROSULES"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "DOCETAXEL",
    "medicamento": "DOCETAXEL 80 MG AMP MICROSULES"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "DOCETAXEL",
    "medicamento": "DOCETAXEL 80 MG KEMEX FAMP"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "DOSTARLIMAB",
    "medicamento": "JEMPERLI 50MG x 10 ML"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "DOXORUBICINA",
    "medicamento": "DOXORUBICINA 10 MG MICROSULES AMP"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "DOXORUBICINA",
    "medicamento": "DOXORUBICINA 50 MG MICROSULES AMP"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "DOXORUBICINA",
    "medicamento": "DOXORUBICINA LIPOSOMAL 20 MG INY RAFFO"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "DURVALUMAB",
    "medicamento": "IMFINZI 120 MG VIAL X 2.4 ML x 1"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "DURVALUMAB",
    "medicamento": "IMFINZI 500 MG VIAL X 10 ML x 1"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "EPIRUBICINA",
    "medicamento": "EPIRUBICINA 50 MG IMA INY"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "ERIBULINA MASILATO",
    "medicamento": "ELEFIX VIAL X 1 X 2 ML"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "ERITROPOYECTINA RECOMB.HUMANA",
    "medicamento": "HEMAX 10.000 UI FCO AMP"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "ERTAPENEM",
    "medicamento": "INVANZ 1 G"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "ETOPOSIDO",
    "medicamento": "ETOPOSIDO MICROSULES 100 MG INY.A.X 1 X 5 ML"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "FILGRASTIM",
    "medicamento": "FILGEN 300 MCG JGA.PRELL.X 5"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "FILGRASTIM",
    "medicamento": "NEUTROMAX 30 MUI (300 MCG) F.A.X 5"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "FILGRASTIM",
    "medicamento": "NEUTROMAX 48 MUI (480 MCG) AMP X 5"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "FLUOROURACILO",
    "medicamento": "FLUOROURACILO KEMEX 500 MG FCO AMP"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "FLUOROURACILO",
    "medicamento": "FLUOROURACILO MICROSULES 500MG INY"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "FOSAPREPITANT DIMEGLUMINA",
    "medicamento": "EMEND IV VIAL 150 MG"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "GEMCITABINA",
    "medicamento": "GEMCITABINA 1 GR GP PHARM F.AMP"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "GEMCITABINA",
    "medicamento": "GEMCITABINA 1 GR KEMEX F.AMP."
  },
  {
    "financiador": "Poder Judicial",
    "droga": "GEMCITABINA",
    "medicamento": "GEMCITABINA 200 MG GP PHARM F.AMP."
  },
  {
    "financiador": "Poder Judicial",
    "droga": "GEMCITABINA",
    "medicamento": "GEMCITABINA 200 MG KEMEX F.AMP."
  },
  {
    "financiador": "Poder Judicial",
    "droga": "GOSERELIN",
    "medicamento": "ZOLADEX 3.6 MG INY"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "GOSERELIN",
    "medicamento": "ZOLADEX LA 10.8 MG INY"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "HIERRO",
    "medicamento": "FERINJECT INY"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "IFOSFAMIDA",
    "medicamento": "IFOSFAMIDA 1 GR MICROSULES"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "IMATINIB",
    "medicamento": "GLIVEC 100 MG COMP x 60"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "IMATINIB",
    "medicamento": "TIMAB 100 MG COMP x 180"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "IMATINIB",
    "medicamento": "TIMAB 400 MG COMP x 30"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "INFLIXIMAB",
    "medicamento": "IXIFI 100 MG AMP x 1"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "INFLIXIMAB",
    "medicamento": "REMICADE 100 MG"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "INMUNOGLOBULINA HUMANA NORMAL",
    "medicamento": "PRIVIGEN 10 GR FA 100 ML"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "INMUNOGLOBULINA HUMANA NORMAL",
    "medicamento": "PRIVIGEN 5 GR FA 50 ML"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "INMUNOGLOBULINA HUMANA NORMAL 5%",
    "medicamento": "CIELDOM 5 GR FA X 100 ML"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "IPILIMUMAB",
    "medicamento": "YERVOY 50 mg/10 ml vial x 1"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "IRINOTECAN",
    "medicamento": "IRINOTECAN GLENMARK 100 MG FA"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "IRINOTECAN",
    "medicamento": "IRINOTECAN KEMEX 100 MG FA"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "IRINOTECAN",
    "medicamento": "IRINOTECAN MICROSULES 100 MG FCOAMP"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "ISATUXIMAB",
    "medicamento": "SARCLISA (ISATUXIMAB 100 MG FCO AMP"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "ISATUXIMAB",
    "medicamento": "SARCLISA (ISATUXIMAB 500 MG FCO AMP"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "ISAVUCONAZOL",
    "medicamento": "ISAVUCONAZOL 200 MG FAX 1 CRESEMBA"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "ISAVUCONAZOL",
    "medicamento": "ISAVUCONAZOL 100 MG FAX 2 CRESEMBA"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "LEUCOVORINA",
    "medicamento": "LEUCOCALCIN 15 MG COMP"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "LEUCOVORINA CALCICA",
    "medicamento": "LEUCOVORINA 50 MG TUTEUR AMP"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "LIPEGFILGRASTIM",
    "medicamento": "LONQUEX 6 MG JGA PRELL X 1"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "MELFALANO INYECTABLE IM",
    "medicamento": "MELFALAN FRIMIRT 50 MG IV"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "MEPREDNISONA",
    "medicamento": "DELTISONA B 40 MG COMP.X 20"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "METOTREXATO",
    "medicamento": "METOTREXATO 1000 MG FAMP MICROSULES"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "METOTREXATO",
    "medicamento": "METOTREXATO 50 MG FAMP MICROSULES"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "METOTREXATO",
    "medicamento": "METOTREXATO 500 MG FAMP MICROSULES"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "MITOMICINA",
    "medicamento": "MITOMICINA C 20 MG F AMP MICROSULES"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "NATALIZUMAB",
    "medicamento": "TYSABRI 150 MG/ML JER.PRELL. X 2"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "NATALIZUMAB",
    "medicamento": "TYSABRI 300 mg/15 ml vial x 1"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "NETUPITANT",
    "medicamento": "AKYNZEO"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "NIVOLUMAB",
    "medicamento": "OPDIVIO 100 mg/10 ml vial x 1"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "NIVOLUMAB",
    "medicamento": "OPDIVIO 40 mg/4 ml vial x 1"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "NIVOLUMAB",
    "medicamento": "OPDIVO 240MG/24ML"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "OBINUTUZUMAB",
    "medicamento": "GAZYVA 1000 MG / 40 ML VIAL"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "OCRELIZUMAB",
    "medicamento": "OCREVUS 300 mg/10 ml vial x 1"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "OCTREOTTIDA",
    "medicamento": "SANDOSTATIN LAR 20 MG JGA PRE x 1"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "OCTREOTTIDA",
    "medicamento": "SANDOSTATIN LAR 30 MG JGA PRE x 1"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "OMALIZUMAB",
    "medicamento": "XOLAIR 150 MG FAMP X 1"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "OMALIZUMAB",
    "medicamento": "XOLAIR 150 MG JGA PRELL X 1"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "ONDANSETRON",
    "medicamento": "ONDANSETRON FRESENIUS 8 MG AMPOLLAS"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "ONDANSETRON",
    "medicamento": "ONDANSETRON LKM 8 8 MG COMP.X 10"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "ONDANSETRON",
    "medicamento": "ONDANSETRON 8 MG CELCTYC AMP"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "ONDANSETRON",
    "medicamento": "ONDANSETRON 8 MG RICHET COMP"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "ONDANSETRON",
    "medicamento": "ONDANSETRON 8 MG GOBBI COMP"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "ONDANSETRON",
    "medicamento": "ONDANSETRON 8 MG MICROSULES COMP"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "ONDANSETRON",
    "medicamento": "ONDANSETRON 8 MG FABRA AMP"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "OXALIPLATINO",
    "medicamento": "OXALIPLATINO KEMEX100MG INY"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "OXALIPLATINO",
    "medicamento": "OXALIPLATINO MICROSULES 100MG INY"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "OXALIPLATINO",
    "medicamento": "OXALIPLATINO 50 MG KEMEX INY"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "OXALIPLATINO",
    "medicamento": "OXALIPLATINO MICROSULES 50MG INY"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "PACLITAXEL",
    "medicamento": "PACLITAXEL KEMEX 30 MG"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "PACLITAXEL",
    "medicamento": "PACLITAXEL KEMEX 100 MG"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "PACLITAXEL",
    "medicamento": "PACLITAXEL KEMEX 150 MG"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "PACLITAXEL ALBUMINA",
    "medicamento": "TAYCOVIT A"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "PACLITAXEL + ALBUMINA",
    "medicamento": "ABRAXANE 100MG INY"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "PAMIDRONATO DISODICO",
    "medicamento": "AMINOMUX 30 MG INY.LIOF.F.A.X 1"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "PAMIDRONATO DISODICO",
    "medicamento": "AMINOMUX 90 MG INY.LIOF.F.A.X 1"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "PANITUMUMAB INYECTABLE IV",
    "medicamento": "VECTIBIX 100 MG X 5ML"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "PEGASPARGASA",
    "medicamento": "ONCASPAR PVO.P/SOL.INY.VIAL X 1"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "PEGFILGRASTIM",
    "medicamento": "PEG NEUTROPINE PA 6MG JGA.PRELL.X1+PROT.A."
  },
  {
    "financiador": "Poder Judicial",
    "droga": "PEMBROLIZUMAB",
    "medicamento": "KEYTRUDA ENVASE 100 MG VIAL X 2"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "PEMBROLIZUMAB",
    "medicamento": "PEMBROX ENVASE 100MG VIAL x 2"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "PEMETREXED",
    "medicamento": "PEMETREXED 500 GP FARM"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "PEMETREXED",
    "medicamento": "PEMETREXED 500 KEMEX FCO AMP"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "PEMETREXED",
    "medicamento": "PEMETREXED 500 GP GLENMARK"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "PERTUZUMAB",
    "medicamento": "PERJETA 420 mg/14 ml a.x 1"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "PERTUZUMAB + TRASTUZUMAB SC",
    "medicamento": "PERJETA - HERCEPTIN IV COMBO PACK Kit Inyectable"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "PERTUZUMAB + TRASTUZUMAB SC",
    "medicamento": "PHESGO 1200/600MG VIAL X1 X15ML"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "PERTUZUMAB + TRASTUZUMAB SC",
    "medicamento": "PHESGO 600/600 VIAL X 10 ML"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "PLERIZAFOR",
    "medicamento": "REVIXIL 20 MG X 1"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "RAMUCIRUMAB",
    "medicamento": "CYRAMZA 500 MG 10 MG/ML F.A.X 1 X 50 ML"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "RITUXIMAB SC",
    "medicamento": "MABTHERA SC 1400 mg/11.7 ml vial x 1"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "RANIBIZUMAB",
    "medicamento": "LUCENTIS 1VIAL X 0,23 ML"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "RITUXIMAB IV",
    "medicamento": "NOVEX 100 MG VIAL ENV X 1 AMP"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "RITUXIMAB IV",
    "medicamento": "NOVEX 500 MG VIAL x 1"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "RITUXIMAB IV",
    "medicamento": "RUXIENCE 100 mg/10 ml f.a x 2"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "RITUXIMAB IV",
    "medicamento": "RUXIENCE 500 MG VIAL"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "RITUXIMAB IV",
    "medicamento": "TRUXIMA 100 mg/10 ml f.a x 2"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "RITUXIMAB IV",
    "medicamento": "TRUXIMA 500 mg/50 ml f.a x 1"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "SECUKINUMAB",
    "medicamento": "COSENTYX 150MG / 1ML AUTOINY X 1"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "SECUKINUMAB",
    "medicamento": "COSENTYX 300MG / 2ML AUTOINY X 1"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "SOMATOTROFINA",
    "medicamento": "NORDITROPIN FLEXPRO 15 MG X 1"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "TAMOXIFENO",
    "medicamento": "10MG COMP GADOR"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "TAMOXIFENO",
    "medicamento": "20MG COMP GADOR"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "TIMOGLOBULINA",
    "medicamento": "TIMOGLOBULINA 25 MG FCO AM"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "TOCILIZUMAB",
    "medicamento": "ACTEMRA 200ML – 10366017"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "TOXINA BOTULINICA",
    "medicamento": "TOXINA BOTULINICA (BOTOX) 100UI AMP"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "TRABECTEDINA",
    "medicamento": "YONDELIS 1 MG FCO AMP"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "TRASTUZUMAB DERUXTECAN",
    "medicamento": "ENHERTU"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "TRASTUZUMAB",
    "medicamento": "HERCEPTIN 440 MG X 50 ML AMP"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "TRASTUZUMAB",
    "medicamento": "HERCEPTIN SC 600 mg/5 ml vial x 1"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "TRASTUZUMAB",
    "medicamento": "TRAZIMERA 440 mg f.a. x 1+ solv."
  },
  {
    "financiador": "Poder Judicial",
    "droga": "TRASTUZUMAB",
    "medicamento": "TUZEPTA 440 mg f.a. x 1+ solv."
  },
  {
    "financiador": "Poder Judicial",
    "droga": "TRASTUZUMAB EMTANSINA",
    "medicamento": "KADCYLA 100 MG X 1 VIAL x 1"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "TRASTUZUMAB EMTANSINA",
    "medicamento": "KADCYLA 160 MG X 1 VIAL x 1"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "TRIPTORELINA",
    "medicamento": "DECAPEPTYL RETARD IM 3.75 MG KIT"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "TRIPTORELINA",
    "medicamento": "DECAPEPTYL RETARD IM 11.25 MG KIT"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "USTEKINUMAB",
    "medicamento": "STELARA 90 MG/1 ML VIAL+J.PRELL"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "USTEKINUMAB",
    "medicamento": "STELARA IV 130MG/26ML VIAL"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "VEDOLIZUMAB",
    "medicamento": "ENTYVIO 300 MG VIAL"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "VEDOLIZUMAB",
    "medicamento": "ENTYVIO SC JGA PRELL"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "VINBLASTINA",
    "medicamento": "VINBLASTINA KEMEX 10MG x 1"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "VINCRISTINA",
    "medicamento": "VINCRISTINA KEMEX 1 MG INY.A.X 1"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "VINCRISTINA",
    "medicamento": "VINCRISTINA LKM 1 1 MG INY.A.X 1"
  },
  {
    "financiador": "Poder Judicial",
    "droga": "VINORELBINE",
    "medicamento": "VINORELBINE 10 MG FCO AMP VINOREL"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "ACETATO DE LEUPROLIDE",
    "medicamento": "ELIGARD 22.5 MG KIT"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "ACETATO DE LEUPROLIDE",
    "medicamento": "ELIGARD 45 MG KIT X 1"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "ACETATO DE LEUPROLIDE",
    "medicamento": "LECTRUM 22,5 ML KIT"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "ACETATO DE LEUPROLIDE",
    "medicamento": "LECTRUM 3.75 MG KIT"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "ACETATO DE LEUPROLIDE",
    "medicamento": "LECTRUM 7.5 MG KIT"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "ACIDO ZOLEDRONICO",
    "medicamento": "ACIDO ZOLEDR.MICROSULES 4 MG AMP"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "ADALIMUMAB",
    "medicamento": "AMGEVITA 40MG/0.8ML AUTOINY X 2"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "ADALIMUMAB",
    "medicamento": "HUMIRA AC LAP AUTOINY 0.4ML X 2"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "ADALIMUMAB",
    "medicamento": "HUMIRA AC LAP AUTOINY 0.8ML X 1"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "APREPITANT",
    "medicamento": "EMEND TRIPACK CAPS.X 1+CAPS.X2"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "ATEZOLIZUMAB",
    "medicamento": "TECENTRIQ 1200mg vial x 1 x 20 ml"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "ATEZOLIZUMAB",
    "medicamento": "TECENTRIQ 840 mg vial x 1 x 14 ml"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "AZACITIDINA",
    "medicamento": "AZAMEX 100 mg f.a.x 1"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "AZACITIDINA",
    "medicamento": "AZZA 100 mg iny.liof.f.a.x 1"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "AZACITIDINA",
    "medicamento": "AZACITIDINA LKM 100 MG AMP"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "BACILO DE CALMETTE GUERIN",
    "medicamento": "BCG CULTIVO SSI FCO AMP X 4"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "BACILO DE CALMETTE GUERIN",
    "medicamento": "CARCIVAC FCO AMP"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "BELATACEPT",
    "medicamento": "NULOJIX 250mg/vial pvo.liof.x 1"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "BENDAMUSTINA",
    "medicamento": "BENDAMUSTINA KEMEX 100 MG FAMP"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "BENDAMUSTINA",
    "medicamento": "BENDAMUSTINA MICROSULES 100 MG FAMP"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "BENDAMUSTINA",
    "medicamento": "BENDAMUSTINA MICROSULES 25 MG FAMP"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "BENDAMUSTINA",
    "medicamento": "BENDAMUSTINA VARIFARMA 100 MG FAMP"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "BENDAMUSTINA",
    "medicamento": "BENDAMUSTINA VARIFARMA 25 MG FAMP"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "BEVACIZUMAB",
    "medicamento": "AVASTIN 100 MG/4 ML AMP"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "BEVACIZUMAB",
    "medicamento": "AVASTIN 400 MG/16 ML AMP"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "BEVACIZUMAB",
    "medicamento": "BEVAX 100 mg vial x 1 x 4 ml"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "BEVACIZUMAB",
    "medicamento": "BEVAX 400 mg vial x 1 x 16 ml"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "BEVACIZUMAB",
    "medicamento": "ZIRAVEB 100 mg/4 ml a.x 1"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "BEVACIZUMAB",
    "medicamento": "ZIRAVEB 400 mg/16 ml a.x 1"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "BLEOMICINA",
    "medicamento": "BLEOMICINA SULF IVAX 15 U FCO AMP"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "BORTEZOMIB",
    "medicamento": "BORATER 3.5 mg f.a.x 1"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "BORTEZOMIB",
    "medicamento": "BORTMEX 3.5 MG INY"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "BORTEZOMIB",
    "medicamento": "GYSATY 3.5 mg f.a.x 1"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "BRENTUXIMAB VEDOTIN",
    "medicamento": "ADCETRIS 50 MG FCO AMP"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "BUSULFAN",
    "medicamento": "BUSULFAN 60 mg f.a.x 8 x 10 ml"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "CABAZITAXEl",
    "medicamento": "BLACKXELL 60 MG F/A"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "CABAZITAXEL",
    "medicamento": "CABAZIL FA 1.5ML + DILUY"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "CARBOPLATINO",
    "medicamento": "CARBOPLATINO 150 MG KEMEX F.A"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "CARBOPLATINO",
    "medicamento": "CARBOPLATINO 150 MG MICROSULES F.A"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "CARBOPLATINO",
    "medicamento": "CARBOPLATINO 450 MG TEVA FCO AMP (TUTEUR)"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "CARBOPLATINO",
    "medicamento": "CARBOPLATINO GLENMARK 150 MG INY."
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "CARBOPLATINO",
    "medicamento": "CARBOPLATINO GLENMARK 450 MG INY."
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "CARBOPLATINO",
    "medicamento": "CARBOPLATINO 150MG TUTEUR LIOF"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "CARBOPLATINO",
    "medicamento": "CARBOPLATINO 450 MG KEMEX F.A"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "CARBOPLATINO",
    "medicamento": "CARBOPLATINO 450 MG MICROSULES F.A"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "CARBOPLATINO",
    "medicamento": "CARBOPLATINO LKM 150 MG"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "CARFILZOMIB",
    "medicamento": "ALCAF 60 MG"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "CARFILZOMIB",
    "medicamento": "CARFIZOL FAMP"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "CARFILZOMIB",
    "medicamento": "FILZOCAR 60 MG TUTEUR"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "CETUXIMAB",
    "medicamento": "ERBITUX X 1 VIAL X 100 ML"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "CETUXIMAB",
    "medicamento": "ERBITUX X 1 VIAL X 20 ML"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "CICLOFOSFAMIDA",
    "medicamento": "CICLOFOSFAMIDA 1 GR FAMP GP PHARM"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "CICLOFOSFAMIDA",
    "medicamento": "CICLOFOSFAMIDA 200 MG FA GPPHARM"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "CICLOFOSFAMIDA",
    "medicamento": "CICLOFOSFAMIDA LKM 1GR FA"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "CICLOFOSFAMIDA",
    "medicamento": "CICLOFOSFAMIDA MICROSULES 1GR"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "CICLOFOSFAMIDA",
    "medicamento": "CICLOFOSFAMIDA MICROSULES 200 MG"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "CISPLATINO",
    "medicamento": "CISPLATINO 10 MG FCO AMP TUTEUR"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "CISPLATINO",
    "medicamento": "CISPLATINO 50 MG FCO AMP TUTEUR"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "CISPLATINO",
    "medicamento": "CISPLATINO 50 MG KEMEX AMP"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "CISPLATINO",
    "medicamento": "CISPLATINO 50 MG MICROSULES AMP"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "CITARABINA",
    "medicamento": "CITARABINA MICROSULES 100 MG FA"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "CITARABINA",
    "medicamento": "CITARABINA MICROSULES 1000 MG FA"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "DACARBAZINA",
    "medicamento": "DACARBAZINA VARIFARMA 200 MG AMP."
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "DACARBAZINA",
    "medicamento": "ONCOCARBIL 200 200 MG INY.LIOF.F.A.X 1"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "DARATUMUMAB",
    "medicamento": "DARZALEX 100 MG/5 ML x 1"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "DARATUMUMAB",
    "medicamento": "DARZALEX 400 MG/20 ML x 1"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "DARATUMUMAB",
    "medicamento": "DARZALEX SC 1800 MG/15 ML"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "DECITABINA",
    "medicamento": "SIGNUM 50 ML FCO.AMP x 1"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "DECITABINE",
    "medicamento": "DETAVI 50MG AMP"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "DEGARELIX",
    "medicamento": "FIRMAGON 120MG FA X 2"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "DEGARELIX",
    "medicamento": "FIRMAGON 80MG FA"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "DENOSUMAB",
    "medicamento": "PROLIA 60 MG/ML JGA PRELL"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "DENOSUMAB",
    "medicamento": "XGEVA 70MG/ML INY"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "DOCETAXEL",
    "medicamento": "DOCETAXEL 20 MG KEMEX FAMP"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "DOCETAXEL",
    "medicamento": "DOCETAXEL 20MG AMP MICROSULES"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "DOCETAXEL",
    "medicamento": "DOCETAXEL 80 MG AMP MICROSULES"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "DOCETAXEL",
    "medicamento": "DOCETAXEL 80 MG KEMEX FAMP"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "DOSTARLIMAB",
    "medicamento": "JEMPERLI 50MG x 10 ML"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "DOSTARLIMAB",
    "medicamento": "JEMPERLI 50MG x 10ML"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "DOXORUBICINA",
    "medicamento": "DOXORUBICINA 10 MG MICROSULES AMP"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "DOXORUBICINA",
    "medicamento": "DOXORUBICINA 50 MG MICROSULES AMP"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "DOXORUBICINA",
    "medicamento": "DOXORUBICINA LIPOSOMAL 20 MG INY RAFFO"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "DURVALUMAB",
    "medicamento": "IMFINZI 120 MG VIAL X 2.4 ML x 1"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "DURVALUMAB",
    "medicamento": "IMFINZI 500 MG VIAL X 10 ML x 1"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "EPIRUBICINA",
    "medicamento": "EPIRUBICINA 50 MG IMA INY"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "ERIBULINA MASILATO",
    "medicamento": "ELEFIX VIAL X 1 X 2 ML"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "ERITROPOYECTINA RECOMB.HUMANA",
    "medicamento": "HEMAX 10.000 UI FCO AMP"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "ETOPOSIDO",
    "medicamento": "ETOPOSIDO MICROSULES 100 MG INY.A.X 1 X 5 ML"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "FILGRASTIM",
    "medicamento": "FILGEN 300 MCG JGA.PRELL.X 5"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "FILGRASTIM",
    "medicamento": "NEUTROMAX 30 MUI (300 MCG) F.A.X 5"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "FILGRASTIM",
    "medicamento": "NEUTROMAX 48 MUI (480 MCG) AMP X 5"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "FLUOROURACILO",
    "medicamento": "FLUOROURACILO KEMEX 500 MG FCO AMP"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "FLUOROURACILO",
    "medicamento": "FLUOROURACILO MICROSULES 500MG INY"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "FOSAPREPITANT DIMEGLUMINA",
    "medicamento": "EMEND IV VIAL 150 MG"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "GEMCITABINA",
    "medicamento": "GEMCITABINA 1 GR GP PHARM F.AMP"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "GEMCITABINA",
    "medicamento": "GEMCITABINA 1 GR KEMEX F.AMP."
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "GEMCITABINA",
    "medicamento": "GEMCITABINA 200 MG GP PHARM F.AMP."
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "GEMCITABINA",
    "medicamento": "GEMCITABINA 200 MG KEMEX F.AMP."
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "GOSERELIN",
    "medicamento": "ZOLADEX 3.6 MG INY"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "GOSERELIN",
    "medicamento": "ZOLADEX LA 10.8 MG INY"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "HIERRO",
    "medicamento": "FERINJECT INY"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "IFOSFAMIDA",
    "medicamento": "IFOSFAMIDA 1 GR MICROSULES"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "IMATINIB",
    "medicamento": "AGACEL 100 MG COMP x 180"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "IMATINIB",
    "medicamento": "AGACEL 400 MG COMP x 30"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "IMATINIB",
    "medicamento": "GLIVEC 100 MG COMP x 60"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "IMATINIB",
    "medicamento": "GLIVEC 400 MG COMP x 30"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "IMATINIB",
    "medicamento": "TIMAB 100 MG COMP x 180"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "IMATINIB",
    "medicamento": "TIMAB 400 MG COMP x 30"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "INFLIXIMAB",
    "medicamento": "IXIFI 100 MG AMP x 1"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "INMUNOGLOBULINA HUMANA NORMAL",
    "medicamento": "CIELDOM 5 GR FA X 100 ML"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "INMUNOGLOBULINA HUMANA NORMAL",
    "medicamento": "PRIVIGEN 10 GR FA 100 ML"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "INMUNOGLOBULINA HUMANA NORMAL",
    "medicamento": "PRIVIGEN 5 GR FA 50 ML"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "IPILIMUMAB",
    "medicamento": "YERVOY 50 mg/10 ml vial x 1"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "IRINOTECAN",
    "medicamento": "IRINOTECAN GLENMARK 100 MG FA"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "IRINOTECAN",
    "medicamento": "IRINOTECAN KEMEX 100 MG FA"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "IRINOTECAN",
    "medicamento": "IRINOTECAN MICROSULES 100 MG FCOAMP"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "ISATUXIMAB",
    "medicamento": "SARCLISA (ISATUXIMAB 100 MG FCO AMP"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "ISATUXIMAB",
    "medicamento": "SARCLISA (ISATUXIMAB 500 MG FCO AMP"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "LEUCOVORINA",
    "medicamento": "LEUCOCALCIN 15 MG COMP"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "LEUCOVORINA CALCICA",
    "medicamento": "LEUCOVORINA 50 MG TUTEUR AMP"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "LIPEGFILGRASTIM",
    "medicamento": "LONQUEX 6 MG JGA PRELL X 1"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "MELFALANO INYECTABLE IM",
    "medicamento": "MELFALAN FRIMIRT 50 MG IV"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "MEPREDNISONA",
    "medicamento": "DELTISONA B 40 MG COMP.X 20"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "METOTREXATO",
    "medicamento": "METOTREXATO 1000 MG FAMP MICROSULES"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "METOTREXATO",
    "medicamento": "METOTREXATO 50 MG FAMP MICROSULES"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "METOTREXATO",
    "medicamento": "METOTREXATO 500 MG FAMP MICROSULES"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "MITOMICINA",
    "medicamento": "MITOMICINA C 20 MG F AMP MICROSULES"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "NATALIZUMAB",
    "medicamento": "TYSABRI 150 MG/ML JER.PRELL. X 2"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "NATALIZUMAB",
    "medicamento": "TYSABRI 300 mg/15 ml vial x 1"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "NETUPITANT",
    "medicamento": "AKYNZEO"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "NIVOLUMAB",
    "medicamento": "OPDIVIO 100 mg/10 ml vial x 1"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "NIVOLUMAB",
    "medicamento": "OPDIVIO 40 mg/4 ml vial x 1"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "NIVOLUMAB",
    "medicamento": "OPDIVO 240MG/24ML"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "OBINUTUZUMAB",
    "medicamento": "GAZYVA 1000 MG / 40 ML VIAL"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "OCRELIZUMAB",
    "medicamento": "OCREVUS 300 mg/10 ml vial x 1"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "OCTREOTTIDA",
    "medicamento": "SANDOSTATIN LAR 20 MG JGA PRE x 1"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "OCTREOTTIDA",
    "medicamento": "SANDOSTATIN LAR 30 MG JGA PRE x 1"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "OMALIZUMAB",
    "medicamento": "XOLAIR 150 MG FAMP X 1"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "OMALIZUMAB",
    "medicamento": "XOLAIR 150 MG JGA PRELL X 1"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "ONDANSETRON",
    "medicamento": "ONDANSETRON FRESENIUS 8 MG AMPOLLAS"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "ONDANSETRON",
    "medicamento": "ONDANSETRON LKM 8 8 MG COMP.X 10"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "OXALIPLATINO",
    "medicamento": "OXALIPLATINO KEMEX100MG INY"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "OXALIPLATINO",
    "medicamento": "OXALIPLATINO MICROSULES 100MG INY"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "OXALIPLATINO",
    "medicamento": "OXALIPLATINO 50 MG KEMEX INY"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "OXALIPLATINO",
    "medicamento": "OXALIPLATINO MICROSULES 50MG INY"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "OXALIPLATINO",
    "medicamento": "PACLITAXEL KEMEX 30 MG"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "PACLITAXEL",
    "medicamento": "PACLITAXEL KEMEX 100 MG"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "PACLITAXEL",
    "medicamento": "PACLITAXEL KEMEX 150 MG"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "PACLITAXEL ALBUMINA",
    "medicamento": "TAYCOVIT A"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "PACLITAXEL + ALBUMINA",
    "medicamento": "ABRAXANE 100MG INY"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "PAMIDRONATO DISODICO",
    "medicamento": "AMINOMUX 30 MG INY.LIOF.F.A.X 1"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "PAMIDRONATO DISODICO",
    "medicamento": "AMINOMUX 90 MG INY.LIOF.F.A.X 1"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "PANITUMUMAB INYECTABLE IV",
    "medicamento": "VECTIBIX 100 MG X 5ML"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "PEGASPARGASA",
    "medicamento": "ONCASPAR PVO.P/SOL.INY.VIAL X 1"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "PEGFILGRASTIM",
    "medicamento": "PEG NEUTROPINE PA 6MG JGA.PRELL.X1+PROT.A."
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "PEMBROLIZUMAB",
    "medicamento": "KEYTRUDA ENVASE 100 MG VIAL X 2"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "PEMETREXED",
    "medicamento": "PEMETREXED 500 GP FARM"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "PEMETREXED",
    "medicamento": "PEMETREXED 500 KEMEX FCO AMP"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "PERTUZUMAB",
    "medicamento": "PERJETA 420 mg/14 ml a.x 1"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "PERTUZUMAB + TRASTUZUMAB SC",
    "medicamento": "PERJETA - HERCEPTIN IV COMBO PACK Kit Inyectable"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "PERTUZUMAB + TRASTUZUMAB SC",
    "medicamento": "PHESGO 1200/600MG VIAL X1 X15ML"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "PERTUZUMAB + TRASTUZUMAB SC",
    "medicamento": "PHESGO 600/600 VIAL X 10 ML"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "PLERIZAFOR",
    "medicamento": "REVIXIL 20 MG X 1"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "RAMUCIRUMAB",
    "medicamento": "CYRAMZA 500 MG 10 MG/ML F.A.X 1 X 50 ML"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "RITUXIMAB SC",
    "medicamento": "MABTHERA SC 1400 mg/11.7 ml vial x 1"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "RITUXIMAB IV",
    "medicamento": "NOVEX 100 MG VIAL ENV X 1 AMP"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "RITUXIMAB IV",
    "medicamento": "NOVEX 500 MG VIAL x 1"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "RITUXIMAB IV",
    "medicamento": "RUXIENCE 100 mg/10 ml f.a x 2"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "RITUXIMAB IV",
    "medicamento": "RUXIENCE 500 MG VIAL"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "RITUXIMAB IV",
    "medicamento": "TRUXIMA 100 mg/10 ml f.a x 2"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "RITUXIMAB IV",
    "medicamento": "TRUXIMA 500 mg/50 ml f.a x 1"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "SECUKINUMAB",
    "medicamento": "COSENTYX 150MG / 1ML AUTOINY X 1"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "SECUKINUMAB",
    "medicamento": "COSENTYX 300MG / 2ML AUTOINY X 1"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "SOMATOTROFINA",
    "medicamento": "NORDITROPIN FLEXPRO 15 MG X 1"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "TOXINA BOTULINICA",
    "medicamento": "TOXINA BOTULINICA (BOTOX) 100UI AMP"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "TRABECTEDINA",
    "medicamento": "YONDELIS 1 MG FCO AMP"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "TRASTUZUMAB",
    "medicamento": "HERCEPTIN 440 MG X 50 ML AMP"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "TRASTUZUMAB",
    "medicamento": "HERCEPTIN SC 600 mg/5 ml vial x 1"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "TRASTUZUMAB",
    "medicamento": "TRAZIMERA 440 mg f.a. x 1+ solv."
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "TRASTUZUMAB",
    "medicamento": "TUZEPTA 440 mg f.a. x 1+ solv."
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "TRASTUZUMAB EMTANSINA",
    "medicamento": "KADCYLA 100 MG X 1 VIAL x 1"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "TRASTUZUMAB EMTANSINA",
    "medicamento": "KADCYLA 160 MG X 1 VIAL x 1"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "TRIPTORELINA",
    "medicamento": "DECAPEPTYL RETARD IM 3.75 MG KIT"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "TRIPTORELINA",
    "medicamento": "DECAPEPTYL RETARD IM 11.25 MG KIT"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "USTEKINUMAB",
    "medicamento": "STELARA 90 MG/1 ML VIAL+J.PRELL"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "USTEKINUMAB",
    "medicamento": "STELARA IV 130MG/26ML VIAL"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "VEDOLIZUMAB",
    "medicamento": "ENTYVIO 300 MG VIAL"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "VEDOLIZUMAB",
    "medicamento": "ENTYVIO SC JGA PRELL"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "VINBLASTINA",
    "medicamento": "VINBLASTINA KEMEX 10MG x 1"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "VINCRISTINA",
    "medicamento": "VINCRISTINA KEMEX 1 MG INY.A.X 1"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "VINCRISTINA",
    "medicamento": "VINCRISTINA LKM 1 1 MG INY.A.X 1"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "VINORELBINE",
    "medicamento": "VINORELBINE 10 MG FCO AMP VINOREL"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "ONDANSETRON",
    "medicamento": "ONDANSETRON FABRA 8 MG AMPOLLAS"
  },
  {
    "financiador": "APOS La Rioja",
    "droga": "ZAVICEFTA",
    "medicamento": "ZAVICEFTA 2G / 0.5 FCO AMP"
  },
  {
    "financiador": "APSOT",
    "droga": "ACETATO DE LEUPROLIDE",
    "medicamento": "ELIGARD 22.5 MG KIT"
  },
  {
    "financiador": "APSOT",
    "droga": "ACETATO DE LEUPROLIDE",
    "medicamento": "ELIGARD 45 MG KIT X 1"
  },
  {
    "financiador": "APSOT",
    "droga": "ACETATO DE LEUPROLIDE",
    "medicamento": "LECTRUM 22,5 ML KIT"
  },
  {
    "financiador": "APSOT",
    "droga": "ACETATO DE LEUPROLIDE",
    "medicamento": "LECTRUM 3.75 MG KIT"
  },
  {
    "financiador": "APSOT",
    "droga": "ACETATO DE LEUPROLIDE",
    "medicamento": "LECTRUM 7.5 MG KIT"
  },
  {
    "financiador": "APSOT",
    "droga": "ACIDO ZOLEDRONICO",
    "medicamento": "ACIDO ZOLEDR.MICROSULES 4 MG AMP"
  },
  {
    "financiador": "APSOT",
    "droga": "ADALIMUMAB",
    "medicamento": "AMGEVITA 40MG/0.8ML AUTOINY X 2"
  },
  {
    "financiador": "APSOT",
    "droga": "ADALIMUMAB",
    "medicamento": "HUMIRA AC LAP AUTOINY 0.4ML X 2"
  },
  {
    "financiador": "APSOT",
    "droga": "ADALIMUMAB",
    "medicamento": "HUMIRA AC LAP AUTOINY 0.8ML X 1"
  },
  {
    "financiador": "APSOT",
    "droga": "ALFILIBERCEPT",
    "medicamento": "EYLIA 40 mg / ml"
  },
  {
    "financiador": "APSOT",
    "droga": "APREPITANT",
    "medicamento": "EMEND TRIPACK CAPS.X 1+CAPS.X2"
  },
  {
    "financiador": "APSOT",
    "droga": "ATEZOLIZUMAB",
    "medicamento": "TECENTRIQ 1200mg vial x 1 x 20 ml"
  },
  {
    "financiador": "APSOT",
    "droga": "ATEZOLIZUMAB",
    "medicamento": "TECENTRIQ 840 mg vial x 1 x 14 ml"
  },
  {
    "financiador": "APSOT",
    "droga": "AZACITIDINA",
    "medicamento": "AZAMEX 100 mg f.a.x 1"
  },
  {
    "financiador": "APSOT",
    "droga": "AZACITIDINA",
    "medicamento": "AZZA 100 mg iny.liof.f.a.x 1"
  },
  {
    "financiador": "APSOT",
    "droga": "AZACITIDINA",
    "medicamento": "AZACITIDINA LKM 100 MG AMP"
  },
  {
    "financiador": "APSOT",
    "droga": "BACILO DE CALMETTE GUERIN",
    "medicamento": "BCG CULTIVO SSI FCO AMP X 4"
  },
  {
    "financiador": "APSOT",
    "droga": "BACILO DE CALMETTE GUERIN",
    "medicamento": "CARCIVAC FCO AMP"
  },
  {
    "financiador": "APSOT",
    "droga": "BELATACEPT",
    "medicamento": "NULOJIX 250mg/vial pvo.liof.x 1"
  },
  {
    "financiador": "APSOT",
    "droga": "BENDAMUSTINA",
    "medicamento": "BENDAMUSTINA KEMEX 100 MG FAMP"
  },
  {
    "financiador": "APSOT",
    "droga": "BENDAMUSTINA",
    "medicamento": "BENDAMUSTINA MICROSULES 100 MG FAMP"
  },
  {
    "financiador": "APSOT",
    "droga": "BENDAMUSTINA",
    "medicamento": "BENDAMUSTINA MICROSULES 25 MG FAMP"
  },
  {
    "financiador": "APSOT",
    "droga": "BENDAMUSTINA",
    "medicamento": "BENDAMUSTINA VARIFARMA 100 MG FAMP"
  },
  {
    "financiador": "APSOT",
    "droga": "BENDAMUSTINA",
    "medicamento": "BENDAMUSTINA VARIFARMA 25 MG FAMP"
  },
  {
    "financiador": "APSOT",
    "droga": "BEVACIZUMAB",
    "medicamento": "AVASTIN 100 MG/4 ML AMP"
  },
  {
    "financiador": "APSOT",
    "droga": "BEVACIZUMAB",
    "medicamento": "AVASTIN 400 MG/16 ML AMP"
  },
  {
    "financiador": "APSOT",
    "droga": "BEVACIZUMAB",
    "medicamento": "BEVAX 100 mg vial x 1 x 4 ml"
  },
  {
    "financiador": "APSOT",
    "droga": "BEVACIZUMAB",
    "medicamento": "BEVAX 400 mg vial x 1 x 16 ml"
  },
  {
    "financiador": "APSOT",
    "droga": "BEVACIZUMAB",
    "medicamento": "ZIRAVEB 100 mg/4 ml a.x 1"
  },
  {
    "financiador": "APSOT",
    "droga": "BEVACIZUMAB",
    "medicamento": "ZIRAVEB 400 mg/16 ml a.x 1"
  },
  {
    "financiador": "APSOT",
    "droga": "BLEOMICINA",
    "medicamento": "BLEOMICINA SULF IVAX 15 U FCO AMP"
  },
  {
    "financiador": "APSOT",
    "droga": "BORTEZOMIB",
    "medicamento": "BORATER 3.5 mg f.a.x 1"
  },
  {
    "financiador": "APSOT",
    "droga": "BORTEZOMIB",
    "medicamento": "BORTMEX 3.5 MG INY"
  },
  {
    "financiador": "APSOT",
    "droga": "BORTEZOMIB",
    "medicamento": "GYSATY 3.5 mg f.a.x 1"
  },
  {
    "financiador": "APSOT",
    "droga": "BRENTUXIMAB VEDOTIN",
    "medicamento": "ADCETRIS 50 MG FCO AMP"
  },
  {
    "financiador": "APSOT",
    "droga": "BUSULFAN",
    "medicamento": "BUSULFAN 60 mg f.a.x 8 x 10 ml"
  },
  {
    "financiador": "APSOT",
    "droga": "CABAZITAXEl",
    "medicamento": "BLACKXELL 60 MG F/A"
  },
  {
    "financiador": "APSOT",
    "droga": "CABAZITAXEL",
    "medicamento": "CABAZIL FA 1.5ML + DILUY"
  },
  {
    "financiador": "APSOT",
    "droga": "CARBOPLATINO",
    "medicamento": "CARBOPLATINO 150 MG KEMEX F.A"
  },
  {
    "financiador": "APSOT",
    "droga": "CARBOPLATINO",
    "medicamento": "CARBOPLATINO 150 MG MICROSULES F.A"
  },
  {
    "financiador": "APSOT",
    "droga": "CARBOPLATINO",
    "medicamento": "CARBOPLATINO 450 MG TEVA FCO AMP (TUTEUR)"
  },
  {
    "financiador": "APSOT",
    "droga": "CARBOPLATINO",
    "medicamento": "CARBOPLATINO GLENMARK 150 MG INY."
  },
  {
    "financiador": "APSOT",
    "droga": "CARBOPLATINO",
    "medicamento": "CARBOPLATINO GLENMARK 450 MG INY."
  },
  {
    "financiador": "APSOT",
    "droga": "CARBOPLATINO",
    "medicamento": "CARBOPLATINO 150MG TUTEUR LIOF"
  },
  {
    "financiador": "APSOT",
    "droga": "CARBOPLATINO",
    "medicamento": "CARBOPLATINO 450 MG KEMEX F.A"
  },
  {
    "financiador": "APSOT",
    "droga": "CARBOPLATINO",
    "medicamento": "CARBOPLATINO 450 MG MICROSULES F.A"
  },
  {
    "financiador": "APSOT",
    "droga": "CARBOPLATINO",
    "medicamento": "CARBOPLATINO LKM 150 MG"
  },
  {
    "financiador": "APSOT",
    "droga": "CARFILZOMIB",
    "medicamento": "ALCAF 60 MG"
  },
  {
    "financiador": "APSOT",
    "droga": "CARFILZOMIB",
    "medicamento": "CARFIZOL FAMP"
  },
  {
    "financiador": "APSOT",
    "droga": "CARFILZOMIB",
    "medicamento": "FILZOCAR 60 MG TUTEUR"
  },
  {
    "financiador": "APSOT",
    "droga": "CETUXIMAB",
    "medicamento": "ERBITUX X 1 VIAL X 100 ML"
  },
  {
    "financiador": "APSOT",
    "droga": "CETUXIMAB",
    "medicamento": "ERBITUX X 1 VIAL X 20 ML"
  },
  {
    "financiador": "APSOT",
    "droga": "CICLOFOSFAMIDA",
    "medicamento": "CICLOFOSFAMIDA 1 GR FAMP GP PHARM"
  },
  {
    "financiador": "APSOT",
    "droga": "CICLOFOSFAMIDA",
    "medicamento": "CICLOFOSFAMIDA 200 MG FA GPPHARM"
  },
  {
    "financiador": "APSOT",
    "droga": "CICLOFOSFAMIDA",
    "medicamento": "CICLOFOSFAMIDA LKM 1GR FA"
  },
  {
    "financiador": "APSOT",
    "droga": "CICLOFOSFAMIDA",
    "medicamento": "CICLOFOSFAMIDA MICROSULES 1GR"
  },
  {
    "financiador": "APSOT",
    "droga": "CICLOFOSFAMIDA",
    "medicamento": "CICLOFOSFAMIDA MICROSULES 200 MG"
  },
  {
    "financiador": "APSOT",
    "droga": "CISPLATINO",
    "medicamento": "CISPLATINO 10 MG FCO AMP TUTEUR"
  },
  {
    "financiador": "APSOT",
    "droga": "CISPLATINO",
    "medicamento": "CISPLATINO 50 MG FCO AMP TUTEUR"
  },
  {
    "financiador": "APSOT",
    "droga": "CISPLATINO",
    "medicamento": "CISPLATINO 50 MG KEMEX AMP"
  },
  {
    "financiador": "APSOT",
    "droga": "CISPLATINO",
    "medicamento": "CISPLATINO 50 MG MICROSULES AMP"
  },
  {
    "financiador": "APSOT",
    "droga": "CITARABINA",
    "medicamento": "CITARABINA MICROSULES 100 MG FA"
  },
  {
    "financiador": "APSOT",
    "droga": "CITARABINA",
    "medicamento": "CITARABINA MICROSULES 1000 MG FA"
  },
  {
    "financiador": "APSOT",
    "droga": "DACARBAZINA",
    "medicamento": "DACARBAZINA VARIFARMA 200 MG AMP."
  },
  {
    "financiador": "APSOT",
    "droga": "DACARBAZINA",
    "medicamento": "ONCOCARBIL 200 200 MG INY.LIOF.F.A.X 1"
  },
  {
    "financiador": "APSOT",
    "droga": "DARATUMUMAB",
    "medicamento": "DARZALEX 100 MG/5 ML x 1"
  },
  {
    "financiador": "APSOT",
    "droga": "DARATUMUMAB",
    "medicamento": "DARZALEX 400 MG/20 ML x 1"
  },
  {
    "financiador": "APSOT",
    "droga": "DARATUMUMAB",
    "medicamento": "DARZALEX SC 1800 MG/15 ML"
  },
  {
    "financiador": "APSOT",
    "droga": "DECITABINA",
    "medicamento": "SIGNUM 50 ML FCO.AMP x 1"
  },
  {
    "financiador": "APSOT",
    "droga": "DECITABINE",
    "medicamento": "DETAVI 50MG AMP"
  },
  {
    "financiador": "APSOT",
    "droga": "DEGARELIX",
    "medicamento": "FIRMAGON 120MG FA X 2"
  },
  {
    "financiador": "APSOT",
    "droga": "DEGARELIX",
    "medicamento": "FIRMAGON 80MG FA"
  },
  {
    "financiador": "APSOT",
    "droga": "DENOSUMAB",
    "medicamento": "PROLIA 60 MG/ML JGA PRELL"
  },
  {
    "financiador": "APSOT",
    "droga": "DENOSUMAB",
    "medicamento": "XGEVA 70MG/ML INY"
  },
  {
    "financiador": "APSOT",
    "droga": "DOCETAXEL",
    "medicamento": "DOCETAXEL 20 MG KEMEX FAMP"
  },
  {
    "financiador": "APSOT",
    "droga": "DOCETAXEL",
    "medicamento": "DOCETAXEL 20MG AMP MICROSULES"
  },
  {
    "financiador": "APSOT",
    "droga": "DOCETAXEL",
    "medicamento": "DOCETAXEL 80 MG AMP MICROSULES"
  },
  {
    "financiador": "APSOT",
    "droga": "DOCETAXEL",
    "medicamento": "DOCETAXEL 80 MG KEMEX FAMP"
  },
  {
    "financiador": "APSOT",
    "droga": "DOSTARLIMAB",
    "medicamento": "JEMPERLI 50MG x 10 ML"
  },
  {
    "financiador": "APSOT",
    "droga": "DOXORUBICINA",
    "medicamento": "DOXORUBICINA 10 MG MICROSULES AMP"
  },
  {
    "financiador": "APSOT",
    "droga": "DOXORUBICINA",
    "medicamento": "DOXORUBICINA 50 MG MICROSULES AMP"
  },
  {
    "financiador": "APSOT",
    "droga": "DOXORUBICINA",
    "medicamento": "DOXORUBICINA LIPOSOMAL 20 MG INY RAFFO"
  },
  {
    "financiador": "APSOT",
    "droga": "DURVALUMAB",
    "medicamento": "IMFINZI 120 MG VIAL X 2.4 ML x 1"
  },
  {
    "financiador": "APSOT",
    "droga": "DURVALUMAB",
    "medicamento": "IMFINZI 500 MG VIAL X 10 ML x 1"
  },
  {
    "financiador": "APSOT",
    "droga": "EPIRUBICINA",
    "medicamento": "EPIRUBICINA 50 MG IMA INY"
  },
  {
    "financiador": "APSOT",
    "droga": "ERIBULINA MASILATO",
    "medicamento": "ELEFIX VIAL X 1 X 2 ML"
  },
  {
    "financiador": "APSOT",
    "droga": "ERITROPOYECTINA RECOMB.HUMANA",
    "medicamento": "HEMAX 10.000 UI FCO AMP"
  },
  {
    "financiador": "APSOT",
    "droga": "ERTAPENEM",
    "medicamento": "INVANZ 1 G"
  },
  {
    "financiador": "APSOT",
    "droga": "ETOPOSIDO",
    "medicamento": "ETOPOSIDO MICROSULES 100 MG INY.A.X 1 X 5 ML"
  },
  {
    "financiador": "APSOT",
    "droga": "FILGRASTIM",
    "medicamento": "FILGEN 300 MCG JGA.PRELL.X 5"
  },
  {
    "financiador": "APSOT",
    "droga": "FILGRASTIM",
    "medicamento": "NEUTROMAX 30 MUI (300 MCG) F.A.X 5"
  },
  {
    "financiador": "APSOT",
    "droga": "FILGRASTIM",
    "medicamento": "NEUTROMAX 48 MUI (480 MCG) AMP X 5"
  },
  {
    "financiador": "APSOT",
    "droga": "FLUOROURACILO",
    "medicamento": "FLUOROURACILO KEMEX 500 MG FCO AMP"
  },
  {
    "financiador": "APSOT",
    "droga": "FLUOROURACILO",
    "medicamento": "FLUOROURACILO MICROSULES 500MG INY"
  },
  {
    "financiador": "APSOT",
    "droga": "FOSAPREPITANT DIMEGLUMINA",
    "medicamento": "EMEND IV VIAL 150 MG"
  },
  {
    "financiador": "APSOT",
    "droga": "GEMCITABINA",
    "medicamento": "GEMCITABINA 1 GR GP PHARM F.AMP"
  },
  {
    "financiador": "APSOT",
    "droga": "GEMCITABINA",
    "medicamento": "GEMCITABINA 1 GR KEMEX F.AMP."
  },
  {
    "financiador": "APSOT",
    "droga": "GEMCITABINA",
    "medicamento": "GEMCITABINA 200 MG GP PHARM F.AMP."
  },
  {
    "financiador": "APSOT",
    "droga": "GEMCITABINA",
    "medicamento": "GEMCITABINA 200 MG KEMEX F.AMP."
  },
  {
    "financiador": "APSOT",
    "droga": "GOSERELIN",
    "medicamento": "ZOLADEX 3.6 MG INY"
  },
  {
    "financiador": "APSOT",
    "droga": "GOSERELIN",
    "medicamento": "ZOLADEX LA 10.8 MG INY"
  },
  {
    "financiador": "APSOT",
    "droga": "HIERRO",
    "medicamento": "FERINJECT INY"
  },
  {
    "financiador": "APSOT",
    "droga": "IFOSFAMIDA",
    "medicamento": "IFOSFAMIDA 1 GR MICROSULES"
  },
  {
    "financiador": "APSOT",
    "droga": "IMATINIB",
    "medicamento": "AGACEL 100 MG COMP x 180"
  },
  {
    "financiador": "APSOT",
    "droga": "IMATINIB",
    "medicamento": "AGACEL 400 MG COMP x 30"
  },
  {
    "financiador": "APSOT",
    "droga": "IMATINIB",
    "medicamento": "GLIVEC 100 MG COMP x 60"
  },
  {
    "financiador": "APSOT",
    "droga": "IMATINIB",
    "medicamento": "GLIVEC 400 MG COMP x 30"
  },
  {
    "financiador": "APSOT",
    "droga": "IMATINIB",
    "medicamento": "TIMAB 100 MG COMP x 180"
  },
  {
    "financiador": "APSOT",
    "droga": "IMATINIB",
    "medicamento": "TIMAB 400 MG COMP x 30"
  },
  {
    "financiador": "APSOT",
    "droga": "INFLIXIMAB",
    "medicamento": "IXIFI 100 MG AMP x 1"
  },
  {
    "financiador": "APSOT",
    "droga": "INMUNOGLOBULINA HUMANA NORMAL",
    "medicamento": "CIELDOM 5 GR FA X 100 ML"
  },
  {
    "financiador": "APSOT",
    "droga": "INMUNOGLOBULINA HUMANA NORMAL",
    "medicamento": "PRIVIGEN 10 GR FA 100 ML"
  },
  {
    "financiador": "APSOT",
    "droga": "INMUNOGLOBULINA HUMANA NORMAL",
    "medicamento": "PRIVIGEN 5 GR FA 50 ML"
  },
  {
    "financiador": "APSOT",
    "droga": "IPILIMUMAB",
    "medicamento": "YERVOY 50 mg/10 ml vial x 1"
  },
  {
    "financiador": "APSOT",
    "droga": "IRINOTECAN",
    "medicamento": "IRINOTECAN GLENMARK 100 MG FA"
  },
  {
    "financiador": "APSOT",
    "droga": "IRINOTECAN",
    "medicamento": "IRINOTECAN KEMEX 100 MG FA"
  },
  {
    "financiador": "APSOT",
    "droga": "IRINOTECAN",
    "medicamento": "IRINOTECAN MICROSULES 100 MG FCOAMP"
  },
  {
    "financiador": "APSOT",
    "droga": "ISATUXIMAB",
    "medicamento": "SARCLISA (ISATUXIMAB 100 MG FCO AMP"
  },
  {
    "financiador": "APSOT",
    "droga": "ISATUXIMAB",
    "medicamento": "SARCLISA (ISATUXIMAB 500 MG FCO AMP"
  },
  {
    "financiador": "APSOT",
    "droga": "LEUCOVORINA",
    "medicamento": "LEUCOCALCIN 15 MG COMP"
  },
  {
    "financiador": "APSOT",
    "droga": "LEUCOVORINA CALCICA",
    "medicamento": "LEUCOVORINA 50 MG TUTEUR AMP"
  },
  {
    "financiador": "APSOT",
    "droga": "LIPEGFILGRASTIM",
    "medicamento": "LONQUEX 6 MG JGA PRELL X 1"
  },
  {
    "financiador": "APSOT",
    "droga": "MELFALANO INYECTABLE IM",
    "medicamento": "MELFALAN FRIMIRT 50 MG IV"
  },
  {
    "financiador": "APSOT",
    "droga": "MEPREDNISONA",
    "medicamento": "DELTISONA B 40 MG COMP.X 20"
  },
  {
    "financiador": "APSOT",
    "droga": "METOTREXATO",
    "medicamento": "METOTREXATO 1000 MG FAMP MICROSULES"
  },
  {
    "financiador": "APSOT",
    "droga": "METOTREXATO",
    "medicamento": "METOTREXATO 50 MG FAMP MICROSULES"
  },
  {
    "financiador": "APSOT",
    "droga": "METOTREXATO",
    "medicamento": "METOTREXATO 500 MG FAMP MICROSULES"
  },
  {
    "financiador": "APSOT",
    "droga": "MITOMICINA",
    "medicamento": "MITOMICINA C 20 MG F AMP MICROSULES"
  },
  {
    "financiador": "APSOT",
    "droga": "NATALIZUMAB",
    "medicamento": "TYSABRI 150 MG/ML JER.PRELL. X 2"
  },
  {
    "financiador": "APSOT",
    "droga": "NATALIZUMAB",
    "medicamento": "TYSABRI 300 mg/15 ml vial x 1"
  },
  {
    "financiador": "APSOT",
    "droga": "NETUPITANT",
    "medicamento": "AKYNZEO"
  },
  {
    "financiador": "APSOT",
    "droga": "NIVOLUMAB",
    "medicamento": "OPDIVIO 100 mg/10 ml vial x 1"
  },
  {
    "financiador": "APSOT",
    "droga": "NIVOLUMAB",
    "medicamento": "OPDIVIO 40 mg/4 ml vial x 1"
  },
  {
    "financiador": "APSOT",
    "droga": "NIVOLUMAB",
    "medicamento": "OPDIVO 240MG/24ML"
  },
  {
    "financiador": "APSOT",
    "droga": "OBINUTUZUMAB",
    "medicamento": "GAZYVA 1000 MG / 40 ML VIAL"
  },
  {
    "financiador": "APSOT",
    "droga": "OCRELIZUMAB",
    "medicamento": "OCREVUS 300 mg/10 ml vial x 1"
  },
  {
    "financiador": "APSOT",
    "droga": "OCTREOTTIDA",
    "medicamento": "SANDOSTATIN LAR 20 MG JGA PRE x 1"
  },
  {
    "financiador": "APSOT",
    "droga": "OCTREOTTIDA",
    "medicamento": "SANDOSTATIN LAR 30 MG JGA PRE x 1"
  },
  {
    "financiador": "APSOT",
    "droga": "OMALIZUMAB",
    "medicamento": "XOLAIR 150 MG FAMP X 1"
  },
  {
    "financiador": "APSOT",
    "droga": "OMALIZUMAB",
    "medicamento": "XOLAIR 150 MG JGA PRELL X 1"
  },
  {
    "financiador": "APSOT",
    "droga": "ONDANSETRON",
    "medicamento": "ONDANSETRON FRESENIUS 8 MG AMPOLLAS"
  },
  {
    "financiador": "APSOT",
    "droga": "ONDANSETRON",
    "medicamento": "ONDANSETRON LKM 8 8 MG COMP.X 10"
  },
  {
    "financiador": "APSOT",
    "droga": "OXALIPLATINO",
    "medicamento": "OXALIPLATINO KEMEX100MG INY"
  },
  {
    "financiador": "APSOT",
    "droga": "OXALIPLATINO",
    "medicamento": "OXALIPLATINO MICROSULES 100MG INY"
  },
  {
    "financiador": "APSOT",
    "droga": "OXALIPLATINO",
    "medicamento": "OXALIPLATINO 50 MG KEMEX INY"
  },
  {
    "financiador": "APSOT",
    "droga": "OXALIPLATINO",
    "medicamento": "OXALIPLATINO MICROSULES 50MG INY"
  },
  {
    "financiador": "APSOT",
    "droga": "PACLITAXEL",
    "medicamento": "PACLITAXEL KEMEX 30 MG"
  },
  {
    "financiador": "APSOT",
    "droga": "PACLITAXEL",
    "medicamento": "PACLITAXEL KEMEX 100 MG"
  },
  {
    "financiador": "APSOT",
    "droga": "PACLITAXEL",
    "medicamento": "PACLITAXEL KEMEX 150 MG"
  },
  {
    "financiador": "APSOT",
    "droga": "PACLITAXEL ALBUMINA",
    "medicamento": "TAYCOVIT A"
  },
  {
    "financiador": "APSOT",
    "droga": "PACLITAXEL + ALBUMINA",
    "medicamento": "ABRAXANE 100MG INY"
  },
  {
    "financiador": "APSOT",
    "droga": "PAMIDRONATO DISODICO",
    "medicamento": "AMINOMUX 30 MG INY.LIOF.F.A.X 1"
  },
  {
    "financiador": "APSOT",
    "droga": "PAMIDRONATO DISODICO",
    "medicamento": "AMINOMUX 90 MG INY.LIOF.F.A.X 1"
  },
  {
    "financiador": "APSOT",
    "droga": "PANITUMUMAB INYECTABLE IV",
    "medicamento": "VECTIBIX 100 MG X 5ML"
  },
  {
    "financiador": "APSOT",
    "droga": "PEGASPARGASA",
    "medicamento": "ONCASPAR PVO.P/SOL.INY.VIAL X 1"
  },
  {
    "financiador": "APSOT",
    "droga": "PEGFILGRASTIM",
    "medicamento": "PEG NEUTROPINE PA 6MG JGA.PRELL.X1+PROT.A."
  },
  {
    "financiador": "APSOT",
    "droga": "PEMBROLIZUMAB",
    "medicamento": "KEYTRUDA ENVASE 100 MG VIAL X 2"
  },
  {
    "financiador": "APSOT",
    "droga": "PEMETREXED",
    "medicamento": "PEMETREXED 500 GP FARM"
  },
  {
    "financiador": "APSOT",
    "droga": "PEMETREXED",
    "medicamento": "PEMETREXED 500 KEMEX FCO AMP"
  },
  {
    "financiador": "APSOT",
    "droga": "PERTUZUMAB",
    "medicamento": "PERJETA 420 mg/14 ml a.x 1"
  },
  {
    "financiador": "APSOT",
    "droga": "PERTUZUMAB + TRASTUZUMAB SC",
    "medicamento": "PERJETA - HERCEPTIN IV COMBO PACK Kit Inyectable"
  },
  {
    "financiador": "APSOT",
    "droga": "PERTUZUMAB + TRASTUZUMAB SC",
    "medicamento": "PHESGO 1200/600MG VIAL X1 X15ML"
  },
  {
    "financiador": "APSOT",
    "droga": "PERTUZUMAB + TRASTUZUMAB SC",
    "medicamento": "PHESGO 600/600 VIAL X 10 ML"
  },
  {
    "financiador": "APSOT",
    "droga": "PIPERACILINA + TAZOBACTAM",
    "medicamento": "PIPERACILINA TAZOBACTAM DRAWER 4,5 G f.a"
  },
  {
    "financiador": "APSOT",
    "droga": "PLERIZAFOR",
    "medicamento": "REVIXIL 20 MG X 1"
  },
  {
    "financiador": "APSOT",
    "droga": "RAMUCIRUMAB",
    "medicamento": "CYRAMZA 500 MG 10 MG/ML F.A.X 1 X 50 ML"
  },
  {
    "financiador": "APSOT",
    "droga": "RANIBIZUMAB",
    "medicamento": "LUCENTIS 1VIAL X 0,23 ML"
  },
  {
    "financiador": "APSOT",
    "droga": "RITUXIMAB SC",
    "medicamento": "MABTHERA SC 1400 mg/11.7 ml vial x 1"
  },
  {
    "financiador": "APSOT",
    "droga": "RITUXIMAB IV",
    "medicamento": "NOVEX 100 MG VIAL ENV X 1 AMP"
  },
  {
    "financiador": "APSOT",
    "droga": "RITUXIMAB IV",
    "medicamento": "NOVEX 500 MG VIAL x 1"
  },
  {
    "financiador": "APSOT",
    "droga": "RITUXIMAB IV",
    "medicamento": "RUXIENCE 100 mg/10 ml f.a x 2"
  },
  {
    "financiador": "APSOT",
    "droga": "RITUXIMAB IV",
    "medicamento": "RUXIENCE 500 MG VIAL"
  },
  {
    "financiador": "APSOT",
    "droga": "RITUXIMAB IV",
    "medicamento": "TRUXIMA 100 mg/10 ml f.a x 2"
  },
  {
    "financiador": "APSOT",
    "droga": "RITUXIMAB IV",
    "medicamento": "TRUXIMA 500 mg/50 ml f.a x 1"
  },
  {
    "financiador": "APSOT",
    "droga": "SECUKINUMAB",
    "medicamento": "COSENTYX 150MG / 1ML AUTOINY X 1"
  },
  {
    "financiador": "APSOT",
    "droga": "SECUKINUMAB",
    "medicamento": "COSENTYX 300MG / 2ML AUTOINY X 1"
  },
  {
    "financiador": "APSOT",
    "droga": "SOMATOTROFINA",
    "medicamento": "NORDITROPIN FLEXPRO 15 MG X 1"
  },
  {
    "financiador": "APSOT",
    "droga": "TOXINA BOTULINICA",
    "medicamento": "TOXINA BOTULINICA (BOTOX) 100UI AMP"
  },
  {
    "financiador": "APSOT",
    "droga": "TRABECTEDINA",
    "medicamento": "YONDELIS 1 MG FCO AMP"
  },
  {
    "financiador": "APSOT",
    "droga": "TRASTUZUMAB",
    "medicamento": "HERCEPTIN 440 MG X 50 ML AMP"
  },
  {
    "financiador": "APSOT",
    "droga": "TRASTUZUMAB",
    "medicamento": "HERCEPTIN SC 600 mg/5 ml vial x 1"
  },
  {
    "financiador": "APSOT",
    "droga": "TRASTUZUMAB",
    "medicamento": "TRAZIMERA 440 mg f.a. x 1+ solv."
  },
  {
    "financiador": "APSOT",
    "droga": "TRASTUZUMAB",
    "medicamento": "TUZEPTA 440 mg f.a. x 1+ solv."
  },
  {
    "financiador": "APSOT",
    "droga": "TRASTUZUMAB EMTANSINA",
    "medicamento": "KADCYLA 100 MG X 1 VIAL x 1"
  },
  {
    "financiador": "APSOT",
    "droga": "TRASTUZUMAB EMTANSINA",
    "medicamento": "KADCYLA 160 MG X 1 VIAL x 1"
  },
  {
    "financiador": "APSOT",
    "droga": "TRIPTORELINA",
    "medicamento": "DECAPEPTYL RETARD IM 3.75 MG KIT"
  },
  {
    "financiador": "APSOT",
    "droga": "TRIPTORELINA",
    "medicamento": "DECAPEPTYL RETARD IM 11.25 MG KIT"
  },
  {
    "financiador": "APSOT",
    "droga": "USTEKINUMAB",
    "medicamento": "STELARA 90 MG/1 ML VIAL+J.PRELL"
  },
  {
    "financiador": "APSOT",
    "droga": "USTEKINUMAB",
    "medicamento": "STELARA IV 130MG/26ML VIAL"
  },
  {
    "financiador": "APSOT",
    "droga": "VEDOLIZUMAB",
    "medicamento": "ENTYVIO 300 MG VIAL"
  },
  {
    "financiador": "APSOT",
    "droga": "VEDOLIZUMAB",
    "medicamento": "ENTYVIO SC JGA PRELL"
  },
  {
    "financiador": "APSOT",
    "droga": "VINBLASTINA",
    "medicamento": "VINBLASTINA KEMEX 10MG x 1"
  },
  {
    "financiador": "APSOT",
    "droga": "VINCRISTINA",
    "medicamento": "VINCRISTINA KEMEX 1 MG INY.A.X 1"
  },
  {
    "financiador": "APSOT",
    "droga": "VINCRISTINA",
    "medicamento": "VINCRISTINA LKM 1 1 MG INY.A.X 1"
  },
  {
    "financiador": "APSOT",
    "droga": "VINORELBINE",
    "medicamento": "VINOREL 10 MG FCO AMP"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "ACETATO DE LEUPROLIDE",
    "medicamento": "ELIGARD 22.5 MG KIT"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "ACETATO DE LEUPROLIDE",
    "medicamento": "ELIGARD 45 MG KIT X 1"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "ACETATO DE LEUPROLIDE",
    "medicamento": "LECTRUM 22,5 ML KIT"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "ACETATO DE LEUPROLIDE",
    "medicamento": "LECTRUM 3.75 MG KIT"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "ACETATO DE LEUPROLIDE",
    "medicamento": "LECTRUM 7.5 MG KIT"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "ACIDO ZOLEDRONICO",
    "medicamento": "ACIDO ZOLEDR.MICROSULES 4 MG AMP"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "ADALIMUMAB",
    "medicamento": "AMGEVITA 40MG/0.8ML AUTOINY X 2"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "ADALIMUMAB",
    "medicamento": "HUMIRA AC LAP AUTOINY 0.4ML X 2"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "ADALIMUMAB",
    "medicamento": "HUMIRA AC LAP AUTOINY 0.8ML X 1"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "ALFILIBERCEPT",
    "medicamento": "EYLIA 40MG/ML"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "APREPITANT",
    "medicamento": "EMEND TRIPACK CAPS.X 1+CAPS.X2"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "ATEZOLIZUMAB",
    "medicamento": "TECENTRIQ 1200mg vial x 1 x 20 ml"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "ATEZOLIZUMAB",
    "medicamento": "TECENTRIQ 840 mg vial x 1 x 14 ml"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "AZACITIDINA",
    "medicamento": "AZAMEX 100 mg f.a.x 1"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "AZACITIDINA",
    "medicamento": "AZZA 100 mg iny.liof.f.a.x 1"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "AZACITIDINA",
    "medicamento": "AZACITIDINA LKM 100 MG AMP"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "BACILO DE CALMETTE GUERIN",
    "medicamento": "BCG CULTIVO SSI FCO AMP X 4"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "BACILO DE CALMETTE GUERIN",
    "medicamento": "CARCIVAC FCO AMP"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "BELATACEPT",
    "medicamento": "NULOJIX 250mg/vial pvo.liof.x 1"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "BENDAMUSTINA",
    "medicamento": "BENDAMUSTINA KEMEX 100 MG FAMP"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "BENDAMUSTINA",
    "medicamento": "BENDAMUSTINA MICROSULES 100 MG FAMP"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "BENDAMUSTINA",
    "medicamento": "BENDAMUSTINA MICROSULES 25 MG FAMP"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "BENDAMUSTINA",
    "medicamento": "BENDAMUSTINA VARIFARMA 100 MG FAMP"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "BENDAMUSTINA",
    "medicamento": "BENDAMUSTINA VARIFARMA 25 MG FAMP"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "BEVACIZUMAB",
    "medicamento": "AVASTIN 100 MG/4 ML AMP"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "BEVACIZUMAB",
    "medicamento": "BEVAX 100 mg vial x 1 x 4 ml"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "BEVACIZUMAB",
    "medicamento": "BEVAX 400 mg vial x 1 x 16 ml"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "BEVACIZUMAB",
    "medicamento": "ZIRAVEB 100 mg/4 ml a.x 1"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "BEVACIZUMAB",
    "medicamento": "ZIRAVEB 400 mg/16 ml a.x 1"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "BLEOMICINA",
    "medicamento": "BLEOMICINA SULF IVAX 15 U FCO AMP"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "BORTEZOMIB",
    "medicamento": "BORATER 3.5 mg f.a.x 1"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "BORTEZOMIB",
    "medicamento": "BORTMEX 3.5 MG INY"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "BORTEZOMIB",
    "medicamento": "GYSATY 3.5 mg f.a.x 1"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "BRENTUXIMAB VEDOTIN",
    "medicamento": "ADCETRIS 50 MG FCO AMP"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "BUSULFAN",
    "medicamento": "BUSULFAN 60 mg f.a.x 8 x 10 ml"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "CABAZITAXEL",
    "medicamento": "BLACKXELL 60 MG F/A"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "CABAZITAXEL",
    "medicamento": "CABAZIL FA 1.5ML + DILUY"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "CARBOPLATINO",
    "medicamento": "CARBOPLATINO 150 MG KEMEX F.A"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "CARBOPLATINO",
    "medicamento": "CARBOPLATINO 150 MG MICROSULES F.A"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "CARBOPLATINO",
    "medicamento": "CARBOPLATINO 450 MG TEVA FCO AMP (TUTEUR)"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "CARBOPLATINO",
    "medicamento": "CARBOPLATINO GLENMARK 150 MG INY."
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "CARBOPLATINO",
    "medicamento": "CARBOPLATINO GLENMARK 450 MG INY."
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "CARBOPLATINO",
    "medicamento": "CARBOPLATINO 150MG TUTEUR LIOF"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "CARBOPLATINO",
    "medicamento": "CARBOPLATINO 450 MG KEMEX F.A"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "CARBOPLATINO",
    "medicamento": "CARBOPLATINO 450 MG MICROSULES F.A"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "CARBOPLATINO",
    "medicamento": "CARBOPLATINO LKM 150 MG"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "CARFILZOMIB",
    "medicamento": "ALCAF 60 MG"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "CARFILZOMIB",
    "medicamento": "CARFIZOL FAMP"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "CARFILZOMIB",
    "medicamento": "FILZOCAR 60 MG TUTEUR"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "CETUXIMAB",
    "medicamento": "ERBITUX X 1 VIAL X 100 ML"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "CETUXIMAB",
    "medicamento": "ERBITUX X 1 VIAL X 20 ML"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "CICLOFOSFAMIDA",
    "medicamento": "CICLOFOSFAMIDA 1 GR FAMP GP PHARM"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "CICLOFOSFAMIDA",
    "medicamento": "CICLOFOSFAMIDA 200 MG FA GPPHARM"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "CICLOFOSFAMIDA",
    "medicamento": "CICLOFOSFAMIDA MICROSULES 1GR"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "CICLOFOSFAMIDA",
    "medicamento": "CICLOFOSFAMIDA MICROSULES 200 MG"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "CISPLATINO",
    "medicamento": "CISPLATINO 10 MG FCO AMP TUTEUR"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "CISPLATINO",
    "medicamento": "CISPLATINO 50 MG FCO AMP TUTEUR"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "CISPLATINO",
    "medicamento": "CISPLATINO 50 MG KEMEX AMP"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "CISPLATINO",
    "medicamento": "CISPLATINO 50 MG MICROSULES AMP"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "CITARABINA",
    "medicamento": "CITARABINA MICROSULES 100 MG FA"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "CITARABINA",
    "medicamento": "CITARABINA MICROSULES 1000 MG FA"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "DACARBAZINA",
    "medicamento": "DACARBAZINA VARIFARMA 200 MG AMP."
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "DACARBAZINA",
    "medicamento": "ONCOCARBIL 200 200 MG INY.LIOF.F.A.X 1"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "DARATUMUMAB",
    "medicamento": "DARZALEX 100 MG/5 ML x 1"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "DARATUMUMAB",
    "medicamento": "DARZALEX 400 MG/20 ML x 1"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "DARATUMUMAB",
    "medicamento": "DARZALEX SC 1800 MG/15 ML"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "DECITABINA",
    "medicamento": "SIGNUM 50 ML FCO.AMP x 1"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "DECITABINE",
    "medicamento": "DETAVI 50MG AMP"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "DEGARELIX",
    "medicamento": "FIRMAGON 120MG FA X 2"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "DEGARELIX",
    "medicamento": "FIRMAGON 80MG FA"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "DENOSUMAB",
    "medicamento": "PROLIA 60 MG/ML JGA PRELL"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "DENOSUMAB",
    "medicamento": "XGEVA 70MG/ML INY"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "DOCETAXEL",
    "medicamento": "DOCETAXEL 20 MG KEMEX FAMP"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "DOCETAXEL",
    "medicamento": "DOCETAXEL 20MG AMP MICROSULES"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "DOCETAXEL",
    "medicamento": "DOCETAXEL 80 MG AMP MICROSULES"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "DOCETAXEL",
    "medicamento": "DOCETAXEL 80 MG KEMEX FAMP"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "DOSTARLIMAB",
    "medicamento": "JEMPERLI 50MG x 10 ML"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "DOXORUBICINA",
    "medicamento": "DOXORUBICINA 10 MG MICROSULES AMP"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "DOXORUBICINA",
    "medicamento": "DOXORUBICINA 50 MG MICROSULES AMP"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "DOXORUBICINA",
    "medicamento": "DOXORUBICINA LIPOSOMAL 20 MG INY RAFFO"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "DURVALUMAB",
    "medicamento": "IMFINZI 120 MG VIAL X 2.4 ML x 1"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "EPIRUBICINA",
    "medicamento": "EPIRUBICINA 50 MG IMA INY"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "ERIBULINA MASILATO",
    "medicamento": "ELEFIX VIAL X 1 X 2 ML"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "ERITROPOYECTINA RECOMB.HUMANA",
    "medicamento": "HEMAX 10.000 UI FCO AMP"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "ERITROPOYECTINA RECOMB.HUMANA",
    "medicamento": "HEMAX 40.000 UI FCO AMP"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "ETOPOSIDO",
    "medicamento": "ETOPOSIDO MICROSULES 100 MG INY.A.X 1 X 5 ML"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "FILGRASTIM",
    "medicamento": "FILGEN 300 MCG JGA.PRELL.X 5"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "FILGRASTIM",
    "medicamento": "NEUTROMAX 30 MUI (300 MCG) F.A.X 5"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "FILGRASTIM",
    "medicamento": "NEUTROMAX 48 MUI (480 MCG) AMP X 5"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "FLUOROURACILO",
    "medicamento": "FLUOROURACILO KEMEX 500 MG FCO AMP"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "FLUOROURACILO",
    "medicamento": "FLUOROURACILO MICROSULES 500MG INY"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "FOSAPREPITANT DIMEGLUMINA",
    "medicamento": "EMEND IV VIAL 150 MG"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "GEMCITABINA",
    "medicamento": "GEMCITABINA 1 GR GP PHARM F.AMP"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "GEMCITABINA",
    "medicamento": "GEMCITABINA 1 GR KEMEX F.AMP."
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "GEMCITABINA",
    "medicamento": "GEMCITABINA 200 MG GP PHARM F.AMP."
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "GEMCITABINA",
    "medicamento": "GEMCITABINA 200 MG KEMEX F.AMP."
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "GOSERELIN",
    "medicamento": "ZOLADEX 3.6 MG INY"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "GOSERELIN",
    "medicamento": "ZOLADEX LA 10.8 MG INY"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "HIERRO",
    "medicamento": "FERINJECT INY"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "IFOSFAMIDA",
    "medicamento": "IFOSFAMIDA 1 GR MICROSULES"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "IMATINIB",
    "medicamento": "AGACEL 100 MG COMP x 180"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "IMATINIB",
    "medicamento": "AGACEL 400 MG COMP x 30"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "IMATINIB",
    "medicamento": "GLIVEC 100 MG COMP x 60"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "IMATINIB",
    "medicamento": "GLIVEC 400 MG COMP x 30"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "IMATINIB",
    "medicamento": "TIMAB 100 MG COMP x 180"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "IMATINIB",
    "medicamento": "TIMAB 400 MG COMP x 30"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "INFLIXIMAB",
    "medicamento": "IXIFI 100 MG AMP x 1"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "INMUNOGLOBULINA HUMANA NORMAL",
    "medicamento": "CIELDOM 5 GR FA X 100 ML"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "INMUNOGLOBULINA HUMANA NORMAL",
    "medicamento": "PRIVIGEN 10 GR FA 100 ML"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "IPILIMUMAB",
    "medicamento": "YERVOY 50 mg/10 ml vial x 1"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "IRINOTECAN",
    "medicamento": "IRINOTECAN GLENMARK 100 MG FA"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "IRINOTECAN",
    "medicamento": "IRINOTECAN KEMEX 100 MG FA"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "IRINOTECAN",
    "medicamento": "IRINOTECAN MICROSULES 100 MG FCOAMP"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "ISATUXIMAB",
    "medicamento": "SARCLISA (ISATUXIMAB 100 MG FCO AMP"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "ISATUXIMAB",
    "medicamento": "SARCLISA (ISATUXIMAB 500 MG FCO AMP"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "LEUCOVORINA",
    "medicamento": "LEUCOCALCIN 15 MG COMP"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "LEUCOVORINA CALCICA",
    "medicamento": "LEUCOVORINA 50 MG TUTEUR AMP"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "LIPEGFILGRASTIM",
    "medicamento": "LONQUEX 6 MG JGA PRELL X 1"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "MELFALANO INYECTABLE IM",
    "medicamento": "MELFALAN FRIMIRT 50 MG IV"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "MEPREDNISONA",
    "medicamento": "DELTISONA B 40 MG COMP.X 20"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "METOTREXATO",
    "medicamento": "METOTREXATO 1000 MG FAMP MICROSULES"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "METOTREXATO",
    "medicamento": "METOTREXATO 50 MG FAMP MICROSULES"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "METOTREXATO",
    "medicamento": "METOTREXATO 500 MG FAMP MICROSULES"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "MITOMICINA",
    "medicamento": "MITOMICINA C 20 MG F AMP MICROSULES"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "NATALIZUMAB",
    "medicamento": "TYSABRI 150 MG/ML JER.PRELL. X 2"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "NATALIZUMAB",
    "medicamento": "TYSABRI 300 mg/15 ml vial x 1"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "NETUPITANT",
    "medicamento": "AKYNZEO"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "NIVOLUMAB",
    "medicamento": "OPDIVO 100 mg/10 ml vial x 1"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "NIVOLUMAB",
    "medicamento": "OPDIVO 40 mg/4 ml vial x 1"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "NIVOLUMAB",
    "medicamento": "OPDIVO 240MG/24ML"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "OBINUTUZUMAB",
    "medicamento": "GAZYVA 1000 MG / 40 ML VIAL"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "OCRELIZUMAB",
    "medicamento": "OCREVUS 300 mg/10 ml vial x 1"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "OCTREOTTIDA",
    "medicamento": "SANDOSTATIN LAR 20 MG JGA PRE x 1"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "OCTREOTTIDA",
    "medicamento": "SANDOSTATIN LAR 30 MG JGA PRE x 1"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "OMALIZUMAB",
    "medicamento": "XOLAIR 150 MG FAMP X 1"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "OMALIZUMAB",
    "medicamento": "XOLAIR 150 MG JGA PRELL X 1"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "ONDANSETRON",
    "medicamento": "ONDANSETRON FRESENIUS 8 MG AMPOLLAS"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "OXALIPLATINO",
    "medicamento": "OXALIPLATINO KEMEX100MG INY"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "OXALIPLATINO",
    "medicamento": "OXALIPLATINO MICROSULES 100MG INY"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "OXALIPLATINO",
    "medicamento": "OXALIPLATINO 50 MG KEMEX INY"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "OXALIPLATINO",
    "medicamento": "OXALIPLATINO MICROSULES 50MG INY"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "PACLITAXEL",
    "medicamento": "PACLITAXEL KEMEX 30 MG"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "PACLITAXEL",
    "medicamento": "PACLITAXEL KEMEX 100 MG"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "PACLITAXEL",
    "medicamento": "PACLITAXEL KEMEX 150 MG"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "PACLITAXEL ALBUMINA",
    "medicamento": "TAYCOVIT A"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "PACLITAXEL + ALBUMINA",
    "medicamento": "ABRAXANE 100MG INY"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "PAMIDRONATO DISODICO",
    "medicamento": "AMINOMUX 30 MG INY.LIOF.F.A.X 1"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "PAMIDRONATO DISODICO",
    "medicamento": "AMINOMUX 90 MG INY.LIOF.F.A.X 1"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "PANITUMUMAB INYECTABLE IV",
    "medicamento": "VECTIBIX 100 MG X 5ML"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "PEGASPARGASA",
    "medicamento": "ONCASPAR PVO.P/SOL.INY.VIAL X 1"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "PEGFILGRASTIM",
    "medicamento": "PEG NEUTROPINE PA 6MG JGA.PRELL.X1+PROT.A."
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "PEMBROLIZUMAB",
    "medicamento": "KEYTRUDA ENVASE 100 MG VIAL X 2"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "PEMETREXED",
    "medicamento": "PEMETREXED 500 GP FARM"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "PEMETREXED",
    "medicamento": "PEMETREXED 500 KEMEX FCO AMP"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "PERTUZUMAB",
    "medicamento": "PERJETA 420 mg/14 ml a.x 1"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "PERTUZUMAB + TRASTUZUMAB SC",
    "medicamento": "PERJETA - HERCEPTIN IV COMBO PACK Kit Inyectable"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "PERTUZUMAB + TRASTUZUMAB SC",
    "medicamento": "PHESGO 1200/600MG VIAL X1 X15ML"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "PERTUZUMAB + TRASTUZUMAB SC",
    "medicamento": "PHESGO 600/600 VIAL X 10 ML"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "PLERIZAFOR",
    "medicamento": "REVIXIL 20 MG X 1"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "RAMUCIRUMAB",
    "medicamento": "CYRAMZA 500 MG 10 MG/ML F.A.X 1 X 50 ML"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "RANIBIZUMAB",
    "medicamento": "LUCENTIS 1VIAL X 0,23 ML"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "RITUXIMAB SC",
    "medicamento": "MABTHERA SC 1400 mg/11.7 ml vial x 1"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "RITUXIMAB IV",
    "medicamento": "NOVEX 100 MG VIAL ENV X 1 AMP"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "RITUXIMAB IV",
    "medicamento": "NOVEX 500 MG VIAL x 1"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "RITUXIMAB IV",
    "medicamento": "RUXIENCE 500 MG VIAL"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "RITUXIMAB IV",
    "medicamento": "TRUXIMA 100 mg/10 ml f.a x 2"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "RITUXIMAB IV",
    "medicamento": "TRUXIMA 500 mg/50 ml f.a x 1"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "SECUKINUMAB",
    "medicamento": "COSENTYX 150MG / 1ML AUTOINY X 1"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "SECUKINUMAB",
    "medicamento": "COSENTYX 300MG / 2ML AUTOINY X 1"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "SOMATOTROFINA",
    "medicamento": "NORDITROPIN FLEXPRO 15 MG X 1"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "TOXINA BOTULINICA",
    "medicamento": "TOXINA BOTULINICA (BOTOX) 100UI AMP"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "TRABECTEDINA",
    "medicamento": "YONDELIS 1 MG FCO AMP"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "TRASTUZUMAB",
    "medicamento": "HERCEPTIN 440 MG X 50 ML AMP"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "TRASTUZUMAB",
    "medicamento": "HERCEPTIN SC 600 mg/5 ml vial x 1"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "TRASTUZUMAB",
    "medicamento": "TRAZIMERA 440 mg f.a. x 1+ solv."
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "TRASTUZUMAB",
    "medicamento": "TUZEPTA 440 mg f.a. x 1+ solv."
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "TRASTUZUMAB EMTANSINA",
    "medicamento": "KADCYLA 100 MG X 1 VIAL x 1"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "TRASTUZUMAB EMTANSINA",
    "medicamento": "KADCYLA 160 MG X 1 VIAL x 1"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "TRIPTORELINA",
    "medicamento": "DECAPEPTYL RETARD IM 3.75 MG KIT"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "TRIPTORELINA",
    "medicamento": "DECAPEPTYL RETARD IM 11.25 MG KIT"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "USTEKINUMAB",
    "medicamento": "STELARA 90 MG/1 ML VIAL+J.PRELL"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "USTEKINUMAB",
    "medicamento": "STELARA IV 130MG/26ML VIAL"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "VEDOLIZUMAB",
    "medicamento": "ENTYVIO 300 MG VIAL"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "VEDOLIZUMAB",
    "medicamento": "ENTYVIO SC JGA PRELL"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "VINBLASTINA",
    "medicamento": "VINBLASTINA KEMEX 10MG x 1"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "VINCRISTINA",
    "medicamento": "VINCRISTINA KEMEX 1 MG INY.A.X 1"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "VINCRISTINA",
    "medicamento": "VINCRISTINA LKM 1 1 MG INY.A.X 1"
  },
  {
    "financiador": "ASE-Medifé",
    "droga": "VINORELBINE",
    "medicamento": "VINOREL 10 MG FCO AMP"
  },
  {
    "financiador": "OSDE Alto Costo",
    "droga": "ATEZOLIZUMAB",
    "medicamento": "TECENTRIQ - 840 mg vial x 1 x 14 ml",
    "auditoria": "Sí"
  },
  {
    "financiador": "OSDE Alto Costo",
    "droga": "ATEZOLIZUMAB",
    "medicamento": "TECENTRIQ - 1200 mg vial x 1 x 20 ml",
    "auditoria": "Sí"
  },
  {
    "financiador": "OSDE Alto Costo",
    "droga": "AZACITIDINA",
    "medicamento": "AZAMEX - 100 mg f.a.x 1",
    "auditoria": "No"
  },
  {
    "financiador": "OSDE Alto Costo",
    "droga": "AZACITIDINA",
    "medicamento": "AZZA - 100 mg iny.liof.f.a.x 1",
    "auditoria": "No"
  },
  {
    "financiador": "OSDE Alto Costo",
    "droga": "BELATACEPT",
    "medicamento": "NULOJIX - 250mg/vial pvo.liof.x 1",
    "auditoria": "No"
  },
  {
    "financiador": "OSDE Alto Costo",
    "droga": "BEVACIZUMAB",
    "medicamento": "BEVAX - 400 mg vial x 1 x 16 ml",
    "auditoria": "Sí"
  },
  {
    "financiador": "OSDE Alto Costo",
    "droga": "BEVACIZUMAB",
    "medicamento": "BEVAX - 100 mg vial x 1 x 4 ml",
    "auditoria": "Sí"
  },
  {
    "financiador": "OSDE Alto Costo",
    "droga": "BORTEZOMIB",
    "medicamento": "BORATER - 3.5 mg f.a.x 1",
    "auditoria": "No"
  },
  {
    "financiador": "OSDE Alto Costo",
    "droga": "BORTEZOMIB",
    "medicamento": "BORTMEX - 3.5 mg f.a.x 1",
    "auditoria": "No"
  },
  {
    "financiador": "OSDE Alto Costo",
    "droga": "BRENTUXIMAB",
    "medicamento": "ADCETRIS - 50 mg vial x 1",
    "auditoria": "Sí"
  },
  {
    "financiador": "OSDE Alto Costo",
    "droga": "CABAZITAXEL",
    "medicamento": "CABAZIL FA 1.5ML + DILUY - F.A.X 1 X 1.5 ML+DILUY.",
    "auditoria": "Sí"
  },
  {
    "financiador": "OSDE Alto Costo",
    "droga": "CETUXIMAB",
    "medicamento": "ERBITUX - vial x 20 ml",
    "auditoria": "Sí"
  },
  {
    "financiador": "OSDE Alto Costo",
    "droga": "CETUXIMAB",
    "medicamento": "ERBITUX - vial x 100 ml",
    "auditoria": "Sí"
  },
  {
    "financiador": "OSDE Alto Costo",
    "droga": "DARATUMUMAB",
    "medicamento": "DARZALEX 100 MG/5 ML (**) - 100 MG/5 ML VIAL X 1",
    "auditoria": "Sí"
  },
  {
    "financiador": "OSDE Alto Costo",
    "droga": "DARATUMUMAB",
    "medicamento": "DARZALEX 400 MG/20 ML (**) - 400 MG/20 ML VIAL X 1",
    "auditoria": "Sí"
  },
  {
    "financiador": "OSDE Alto Costo",
    "droga": "DENOSUMAB",
    "medicamento": "XGEVA - 120mg/1.7 ml iny.vial x1",
    "auditoria": "Sí"
  },
  {
    "financiador": "OSDE Alto Costo",
    "droga": "DURVALUMAB",
    "medicamento": "IMFINZI 120 MG VIAL X 2.4 ML - 120 MG VIAL X 1 X 2.4 ML",
    "auditoria": "Sí"
  },
  {
    "financiador": "OSDE Alto Costo",
    "droga": "DURVALUMAB",
    "medicamento": "IMFINZI 500 MG VIAL X 10 ML - 500 MG VIAL X 1 X 10 ML",
    "auditoria": "Sí"
  },
  {
    "financiador": "OSDE Alto Costo",
    "droga": "ERIBULINA",
    "medicamento": "ELEFIX VIAL X 1 X 2 ML - VIAL X 1 X 2 ML",
    "auditoria": "Sí"
  },
  {
    "financiador": "OSDE Alto Costo",
    "droga": "INFLIXIMAB",
    "medicamento": "IXIFI 100 MG AMP - 100 MG F.A.X 1",
    "auditoria": "Sí"
  },
  {
    "financiador": "OSDE Alto Costo",
    "droga": "IPILIMUMAB",
    "medicamento": "YERVOY - 50 mg/10 ml vial x 1",
    "auditoria": "Sí"
  },
  {
    "financiador": "OSDE Alto Costo",
    "droga": "ISATUXIMAB",
    "medicamento": "SARCLISA (ISATUXIMAB 500 MG FCO AMP - 500 MG FCO AMP",
    "auditoria": "Sí"
  },
  {
    "financiador": "OSDE Alto Costo",
    "droga": "ISATUXIMAB",
    "medicamento": "SARCLISA (ISATUXIMAB)100 MG FCO AMP - 100 MG FCO AMP",
    "auditoria": "Sí"
  },
  {
    "financiador": "OSDE Alto Costo",
    "droga": "LEUPROLIDE,ACETATO",
    "medicamento": "LECTRUM 22,5 ML KIT - 22,5 ML KIT",
    "auditoria": "Sí"
  },
  {
    "financiador": "OSDE Alto Costo",
    "droga": "NAB PACLITAXEL",
    "medicamento": "TAYCOVIT A",
    "auditoria": "Sí"
  },
  {
    "financiador": "OSDE Alto Costo",
    "droga": "NATALIZUMAB",
    "medicamento": "TYSABRI - 150 MG/ML JER.PRELL. X 2",
    "auditoria": "Solo 1.ª vez"
  },
  {
    "financiador": "OSDE Alto Costo",
    "droga": "NATALIZUMAB",
    "medicamento": "TYSABRI - 300 mg/15 ml vial x 1",
    "auditoria": "Solo 1.ª vez"
  },
  {
    "financiador": "OSDE Alto Costo",
    "droga": "NIVOLUMAB",
    "medicamento": "OPDIVO - 40 mg/4 ml vial x 1",
    "auditoria": "Sí"
  },
  {
    "financiador": "OSDE Alto Costo",
    "droga": "NIVOLUMAB",
    "medicamento": "OPDIVO - 100 mg/10 ml vial x 1",
    "auditoria": "Sí"
  },
  {
    "financiador": "OSDE Alto Costo",
    "droga": "OBINUTUZUMABE",
    "medicamento": "GAZYVA 1000 MG / 40 ML VIAL (**) - 1000 MG / 40 ML VIAL (**)",
    "auditoria": "Sí"
  },
  {
    "financiador": "OSDE Alto Costo",
    "droga": "OCRELIZUMAB",
    "medicamento": "OCREVUS - 300 mg/10 ml vial x 1",
    "auditoria": "Sí"
  },
  {
    "financiador": "OSDE Alto Costo",
    "droga": "OCTREOTIDA",
    "medicamento": "SANDOSTATIN LAR 20 MG JGA PRE - 20 MG JGA.PRELL.X 1",
    "auditoria": "Sí"
  },
  {
    "financiador": "OSDE Alto Costo",
    "droga": "OCTREOTIDA",
    "medicamento": "SANDOSTATIN LAR 30 MG JGA PRE - 30 MG JGA.PRELL.X 1",
    "auditoria": "Sí"
  },
  {
    "financiador": "OSDE Alto Costo",
    "droga": "PEGASPARGASA",
    "medicamento": "ONCASPAR PVO.P/SOL.INY.VIAL X 1 - PVO.P/SOL.INY.VIAL X 1",
    "auditoria": "Sí"
  },
  {
    "financiador": "OSDE Alto Costo",
    "droga": "PERTUZUMAB",
    "medicamento": "PERJETA - 420 mg/14 ml a.x 1",
    "auditoria": "Sí"
  },
  {
    "financiador": "OSDE Alto Costo",
    "droga": "PERTUZUMAB+TRASTUZUMAB",
    "medicamento": "PHESGO 1200/600MG VIAL X1 X15ML - 1200/600MG VIAL X1 X15ML",
    "auditoria": "Sí"
  },
  {
    "financiador": "OSDE Alto Costo",
    "droga": "PERTUZUMAB+TRASTUZUMAB",
    "medicamento": "PHESGO 600/600 VIAL X 10 ML - 600/600 VIAL X 10 ML",
    "auditoria": "Sí"
  },
  {
    "financiador": "OSDE Alto Costo",
    "droga": "RAMUCIRUMAB",
    "medicamento": "CYRAMZA 100 MG 10 MG/ML F.A.X 1 X 10 ML - 100 MG 10 MG/ML F.A.X 1 X 10 ML",
    "auditoria": "Sí"
  },
  {
    "financiador": "OSDE Alto Costo",
    "droga": "RITUXIMAB",
    "medicamento": "NOVEX 100 - 100 mg vial x 1",
    "auditoria": "Sí"
  },
  {
    "financiador": "OSDE Alto Costo",
    "droga": "RITUXIMAB",
    "medicamento": "NOVEX 500 - 500 mg vial x 1",
    "auditoria": "Sí"
  },
  {
    "financiador": "OSDE Alto Costo",
    "droga": "TOCILIZUMAB",
    "medicamento": "ACTEMRA 200ML – 10366017 - 200MG/10ML F.A.X 1",
    "auditoria": "Sí"
  },
  {
    "financiador": "OSDE Alto Costo",
    "droga": "TRABECTEDINA",
    "medicamento": "YONDELIS 1 MG FCO AMP - 1 MG FCO AMP",
    "auditoria": "Sí"
  },
  {
    "financiador": "OSDE Alto Costo",
    "droga": "TRASTUZUMAB",
    "medicamento": "TRAZIMERA - 440 mg f.a. x 1+ solv.",
    "auditoria": "Sí"
  },
  {
    "financiador": "OSDE Alto Costo",
    "droga": "TRASTUZUMAB EMTANSINA",
    "medicamento": "KADCYLA 100 MG X 1 VIAL - 100 MG VIAL X 1",
    "auditoria": "Sí"
  },
  {
    "financiador": "OSDE Alto Costo",
    "droga": "TRASTUZUMAB EMTANSINA",
    "medicamento": "KADCYLA 160 MG X 1 VIAL - 160 MG VIAL X 1",
    "auditoria": "Sí"
  },
  {
    "financiador": "OSDE Alto Costo",
    "droga": "VEDOLIZUMAB",
    "medicamento": "ENTYVIO - 300 mg vial x 1",
    "auditoria": "Sí"
  },
  {
    "financiador": "OSDE Alto Costo",
    "droga": "PANITUMUMAB",
    "medicamento": "VECTIBIX - 100 MG X 5ML",
    "auditoria": "Sí"
  },
  {
    "financiador": "OSDE Alto Costo",
    "droga": "LEUPROLIDE",
    "medicamento": "ELIGARD - 22.5 MG KIT",
    "auditoria": "Sí"
  },
  {
    "financiador": "OSDE Alto Costo",
    "droga": "LEUPROLIDE",
    "medicamento": "ELIGARD - 45 MG KIT",
    "auditoria": "Sí"
  },
  {
    "financiador": "OSDE Alto Costo",
    "droga": "ISAVUCONAZOL",
    "medicamento": "CRESEMBA - 200 MG F.A X 1",
    "auditoria": "No"
  },
  {
    "financiador": "OSDE Alto Costo",
    "droga": "ISAVUCONAZOL",
    "medicamento": "CRESEMBA - 100 MG CAPS",
    "auditoria": "No"
  },
  {
    "financiador": "OSDE Alto Costo",
    "droga": "CABAZITAXEL IV",
    "medicamento": "BLACKXELL - 60 MG FCO AMP",
    "auditoria": "Sí"
  },
  {
    "financiador": "OSDE Alto Costo",
    "droga": "DECITABINE",
    "medicamento": "DETAVI - 50 MG AMPOLLAS",
    "auditoria": "Sí"
  },
  {
    "financiador": "OSDE Alto Costo",
    "droga": "PLERIXAFOR",
    "medicamento": "REVIXIL - 20 MG FA X 1",
    "auditoria": "No"
  }
];

MEDICAMENTOS.push(...[
  ["ACETATO DE LEUPROLIDE","ELIGARD 22.5 MG KIT"],
  ["ACETATO DE LEUPROLIDE","ELIGARD 45 MG KIT X 1"],
  ["ACETATO DE LEUPROLIDE","LECTRUM 22,5 ML KIT"],
  ["ACETATO DE LEUPROLIDE","LECTRUM 3.75 MG KIT"],
  ["ACETATO DE LEUPROLIDE","LECTRUM 7.5 MG KIT"],
  ["ACIDO ZOLEDRONICO","ACIDO ZOLEDR.MICROSULES 4 MG AMP"],
  ["ADALIMUMAB","AMGEVITA 40MG/0.8ML AUTOINY X 2"],
  ["ADALIMUMAB","HUMIRA AC LAP AUTOINY 0.4ML X 2"],
  ["ADALIMUMAB","HUMIRA AC LAP AUTOINY 0.8ML X 1"],
  ["APREPITANT","EMEND TRIPACK CAPS.X 1+CAPS.X2"],
  ["ATEZOLIZUMAB","TECENTRIQ 1200mg vial x 1 x 20 ml"],
  ["ATEZOLIZUMAB","TECENTRIQ 840 mg vial x 1 x 14 ml"],
  ["AZACITIDINA","AZAMEX 100 mg f.a.x 1"],
  ["AZACITIDINA","AZZA 100 mg iny.liof.f.a.x 1"],
  ["AZACITIDINA","AZACITIDINA LKM 100 MG AMP"],
  ["BACILO DE CALMETTE GUERIN","BCG CULTIVO SSI FCO AMP X 4"],
  ["BACILO DE CALMETTE GUERIN","CARCIVAC FCO AMP"],
  ["BELATACEPT","NULOJIX 250mg/vial pvo.liof.x 1"],
  ["BENDAMUSTINA","BENDAMUSTINA KEMEX 100 MG FAMP"],
  ["BENDAMUSTINA","BENDAMUSTINA MICROSULES 100 MG FAMP"],
  ["BENDAMUSTINA","BENDAMUSTINA MICROSULES 25 MG FAMP"],
  ["BENDAMUSTINA","BENDAMUSTINA VARIFARMA 100 MG FAMP"],
  ["BEVACIZUMAB","AVASTIN 100 MG/4 ML AMP"],
  ["BEVACIZUMAB","AVASTIN 400 MG/16 ML AMP"],
  ["BEVACIZUMAB","BEVAX 100 mg vial x 1 x 4 ml"],
  ["BEVACIZUMAB","BEVAX 400 mg vial x 1 x 16 ml"],
  ["BEVACIZUMAB","ZIRAVEB 100 mg/4 ml a.x 1"],
  ["BEVACIZUMAB","ZIRAVEB 400 mg/16 ml a.x 1"],
  ["BLEOMICINA","BLEOMICINA SULF IVAX 15 U FCO AMP"],
  ["BORTEZOMIB","BORATER 3.5 mg f.a.x 1"],
  ["BORTEZOMIB","BORTMEX 3.5 MG INY"],
  ["BORTEZOMIB","GYSATY 3.5 mg f.a.x 1"],
  ["BRENTUXIMAB VEDOTIN","ADCETRIS 50 MG FCO AMP"],
  ["BUSULFAN","BUSULFAN 60 mg f.a.x 8 x 10 ml"],
  ["CABAZITAXEL","BLACKXELL 60 MG F/A"],
  ["CABAZITAXEL","CABAZIL FA 1.5ML + DILUY"],
  ["CARBOPLATINO","CARBOPLATINO 150 MG KEMEX F.A"],
  ["CARBOPLATINO","CARBOPLATINO 150 MG MICROSULES F.A"],
  ["CARBOPLATINO","CARBOPLATINO 450 MG TEVA FCO AMP (TUTEUR)"],
  ["CARBOPLATINO","CARBOPLATINO GLENMARK 150 MG INY."],
  ["CARBOPLATINO","CARBOPLATINO GLENMARK 450 MG INY."],
  ["CARBOPLATINO","CARBOPLATINO 150MG TUTEUR LIOF"],
  ["CARBOPLATINO","CARBOPLATINO 450 MG KEMEX F.A"],
  ["CARBOPLATINO","CARBOPLATINO 450 MG MICROSULES F.A"],
  ["CARBOPLATINO","CARBOPLATINO LKM 150 MG"],
  ["CARFILZOMIB","ALCAF 60 MG"],
  ["CARFILZOMIB","FILZOCAR 60 MG TUTEUR"],
  ["CETUXIMAB","ERBITUX X 1 VIAL X 100 ML"],
  ["CETUXIMAB","ERBITUX X 1 VIAL X 20 ML"],
  ["CICLOFOSFAMIDA","CICLOFOSFAMIDA 1 GR FAMP GP PHARM"],
  ["CICLOFOSFAMIDA","CICLOFOSFAMIDA 200 MG FA GPPHARM"],
  ["CICLOFOSFAMIDA","CICLOFOSFAMIDA LKM 1GR FA"],
  ["CICLOFOSFAMIDA","CICLOFOSFAMIDA MICROSULES 1GR"],
  ["CICLOFOSFAMIDA","CICLOFOSFAMIDA MICROSULES 200 MG"],
  ["CISPLATINO","CISPLATINO 10 MG FCO AMP TUTEUR"],
  ["CISPLATINO","CISPLATINO 50 MG FCO AMP TUTEUR"],
  ["CISPLATINO","CISPLATINO 50 MG KEMEX AMP"],
  ["CISPLATINO","CISPLATINO 50 MG MICROSULES AMP"],
  ["CITARABINA","CITARABINA MICROSULES 100 MG FA"],
  ["CITARABINA","CITARABINA MICROSULES 1000 MG FA"],
  ["DACARBAZINA","DACARBAZINA VARIFARMA 200 MG AMP."],
  ["DACARBAZINA","ONCOCARBIL 200 200 MG INY.LIOF.F.A.X 1"],
  ["DARATUMUMAB","DARZALEX 100 MG/5 ML x 1"],
  ["DARATUMUMAB","DARZALEX 400 MG/20 ML x 1"],
  ["DARATUMUMAB","DARZALEX SC 1800 MG/15 ML"],
  ["DECITABINA","SIGNUM 50 ML FCO.AMP x 1"],
  ["DECITABINE","DETAVI 50MG AMP"],
  ["DEGARELIX","FIRMAGON 120MG FA X 2"],
  ["DEGARELIX","FIRMAGON 80MG FA"],
  ["DENOSUMAB","PROLIA 60 MG/ML JGA PRELL"],
  ["DOCETAXEL","DOCETAXEL 20 MG KEMEX FAMP"],
  ["DOCETAXEL","DOCETAXEL 20MG AMP MICROSULES"],
  ["DOCETAXEL","DOCETAXEL 80 MG AMP MICROSULES"],
  ["DOCETAXEL","DOCETAXEL 80 MG KEMEX FAMP"],
  ["DOSTARLIMAB","JEMPERLI 50MG x 10 ML"],
  ["DOXORUBICINA","DOXORUBICINA 10 MG MICROSULES AMP"],
  ["DOXORUBICINA","DOXORUBICINA 50 MG MICROSULES AMP"],
  ["DOXORUBICINA","DOXORUBICINA LIPOSOMAL 20 MG INY RAFFO"],
  ["DURVALUMAB","IMFINZI 120 MG VIAL X 2.4 ML x 1"],
  ["DURVALUMAB","IMFINZI 500 MG VIAL X 10 ML x 1"],
  ["EPIRUBICINA","EPIRUBICINA 50 MG IMA INY"],
  ["ERIBULINA MASILATO","ELEFIX VIAL X 1 X 2 ML"],
  ["ERITROPOYECTINA RECOMB.HUMANA","HEMAX 10.000 UI FCO AMP"],
  ["ETOPOSIDO","ETOPOSIDO MICROSULES 100 MG INY.A.X 1 X 5 ML"],
  ["FILGRASTIM","FILGEN 300 MCG JGA.PRELL.X 5"],
  ["FILGRASTIM","NEUTROMAX 30 MUI (300 MCG) F.A.X 5"],
  ["FILGRASTIM","NEUTROMAX 48 MUI (480 MCG) AMP X 5"],
  ["FLUOROURACILO","FLUOROURACILO KEMEX 500 MG FCO AMP"],
  ["FLUOROURACILO","FLUOROURACILO MICROSULES 500MG INY"],
  ["FOSAPREPITANT DIMEGLUMINA","EMEND IV VIAL 150 MG"],
  ["GEMCITABINA","GEMCITABINA 1 GR GP PHARM F.AMP"],
  ["GEMCITABINA","GEMCITABINA 1 GR KEMEX F.AMP."],
  ["GEMCITABINA","GEMCITABINA 200 MG GP PHARM F.AMP."],
  ["GEMCITABINA","GEMCITABINA 200 MG KEMEX F.AMP."],
  ["GOSERELIN","ZOLADEX LA 10.8 MG INY"],
  ["HIERRO","FERINJECT INY"],
  ["IFOSFAMIDA","IFOSFAMIDA 1 GR MICROSULES"],
  ["IMATINIB","AGACEL 100 MG COMP x 180"],
  ["IMATINIB","AGACEL 400 MG COMP x 30"],
  ["IMATINIB","GLIVEC 100 MG COMP x 60"],
  ["IMATINIB","GLIVEC 400 MG COMP x 30"],
  ["IMATINIB","TIMAB 100 MG COMP x 180"],
  ["IMATINIB","TIMAB 400 MG COMP x 30"],
  ["INFLIXIMAB","IXIFI 100 MG AMP x 1"],
  ["INMUNOGLOBULINA HUMANA NORMAL","CIELDOM 5 GR FA X 100 ML"],
  ["INMUNOGLOBULINA HUMANA NORMAL","PRIVIGEN 10 GR FA 100 ML"],
  ["INMUNOGLOBULINA HUMANA NORMAL","PRIVIGEN 5 GR FA 50 ML"],
  ["IPILIMUMAB","YERVOY 50 mg/10 ml vial x 1"],
  ["IRINOTECAN","IRINOTECAN GLENMARK 100 MG FA"],
  ["IRINOTECAN","IRINOTECAN KEMEX 100 MG FA"],
  ["IRINOTECAN","IRINOTECAN MICROSULES 100 MG FCOAMP"],
  ["ISATUXIMAB","SARCLISA (ISATUXIMAB 100 MG FCO AMP"],
  ["ISATUXIMAB","SARCLISA (ISATUXIMAB 500 MG FCO AMP"],
  ["LEUCOVORINA","LEUCOCALCIN 15 MG COMP"],
  ["LEUCOVORINA CALCICA","LEUCOVORINA 50 MG TUTEUR AMP"],
  ["LIPEGFILGRASTIM","LONQUEX 6 MG JGA PRELL X 1"],
  ["MELFALANO INYECTABLE IM","MELFALAN FRIMIRT 50 MG IV"],
  ["MEPREDNISONA","DELTISONA B 40 MG COMP.X 20"],
  ["METOTREXATO","METOTREXATO 50 MG FAMP MICROSULES"],
  ["METOTREXATO","METOTREXATO 500 MG FAMP MICROSULES"],
  ["MITOMICINA","MITOMICINA C 20 MG F AMP MICROSULES"],
  ["NATALIZUMAB","TYSABRI 150 MG/ML JER.PRELL. X 2"],
  ["NATALIZUMAB","TYSABRI 300 mg/15 ml vial x 1"],
  ["NETUPITANT","AKYNZEO"],
  ["NIVOLUMAB","OPDIVIO 100 mg/10 ml vial x 1"],
  ["NIVOLUMAB","OPDIVIO 40 mg/4 ml vial x 1"],
  ["NIVOLUMAB","OPDIVO 240MG/24ML"],
  ["OBINUTUZUMAB","GAZYVA 1000 MG / 40 ML VIAL"],
  ["OCRELIZUMAB","OCREVUS 300 mg/10 ml vial x 1"],
  ["OCTREOTTIDA","SANDOSTATIN LAR 20 MG JGA PRE x 1"],
  ["OCTREOTTIDA","SANDOSTATIN LAR 30 MG JGA PRE x 1"],
  ["OMALIZUMAB","XOLAIR 150 MG FAMP X 1"],
  ["OMALIZUMAB","XOLAIR 150 MG JGA PRELL X 1"],
  ["ONDANSETRON","ONDANSETRON FRESENIUS 8 MG AMPOLLAS"],
  ["ONDANSETRON","ONDANSETRON LKM 8 8 MG COMP.X 10"],
  ["OXALIPLATINO","OXALIPLATINO KEMEX100MG INY"],
  ["OXALIPLATINO","OXALIPLATINO MICROSULES 100MG INY"],
  ["OXALIPLATINO","OXALIPLATINO 50 MG KEMEX INY"],
  ["OXALIPLATINO","OXALIPLATINO MICROSULES 50MG INY"],
  ["PACLITAXEL","PACLITAXEL KEMEX 30 MG"],
  ["PACLITAXEL","PACLITAXEL KEMEX 100 MG"],
  ["PACLITAXEL","PACLITAXEL KEMEX 150 MG"],
  ["PACLITAXEL + ALBUMINA","ABRAXANE 100MG INY"],
  ["PAMIDRONATO DISODICO","AMINOMUX 30 MG INY.LIOF.F.A.X 1"],
  ["PAMIDRONATO DISODICO","AMINOMUX 90 MG INY.LIOF.F.A.X 1"],
  ["PANITUMUMAB INYECTABLE IV","VECTIBIX 100 MG X 5ML"],
  ["PEGASPARGASA","ONCASPAR PVO.P/SOL.INY.VIAL X 1"],
  ["PEGFILGRASTIM","PEG NEUTROPINE PA 6MG JGA.PRELL.X1+PROT.A."],
  ["PEMBROLIZUMAB","KEYTRUDA ENVASE 100 MG VIAL X 2"],
  ["PEMETREXED","PEMETREXED 500 GP FARM"],
  ["PEMETREXED","PEMETREXED 500 KEMEX FCO AMP"],
  ["PERTUZUMAB","PERJETA 420 mg/14 ml a.x 1"],
  ["PERTUZUMAB + TRASTUZUMAB SC","PERJETA - HERCEPTIN IV COMBO PACK Kit Inyectable"],
  ["PERTUZUMAB + TRASTUZUMAB SC","PHESGO 1200/600MG VIAL X1 X15ML"],
  ["PERTUZUMAB + TRASTUZUMAB SC","PHESGO 600/600 VIAL X 10 ML"],
  ["PLERIZAFOR","REVIXIL 20 MG X 1"],
  ["RAMUCIRUMAB","CYRAMZA 500 MG 10 MG/ML F.A.X 1 X 50 ML"],
  ["RITUXIMAB SC","MABTHERA SC 1400 mg/11.7 ml vial x 1"],
  ["RITUXIMAB IV","NOVEX 100 MG VIAL ENV X 1 AMP"],
  ["RITUXIMAB IV","NOVEX 500 MG VIAL x 1"],
  ["RITUXIMAB IV","RUXIENCE 100 mg/10 ml f.a x 2"],
  ["RITUXIMAB IV","RUXIENCE 500 MG VIAL"],
  ["RITUXIMAB IV","TRUXIMA 100 mg/10 ml f.a x 2"],
  ["RITUXIMAB IV","TRUXIMA 500 mg/50 ml f.a x 1"],
  ["SECUKINUMAB","COSENTYX 150MG / 1ML AUTOINY X 1"],
  ["SOMATOTROFINA","NORDITROPIN FLEXPRO 15 MG X 1"],
  ["TOXINA BOTULINICA","TOXINA BOTULINICA (BOTOX) 100UI AMP"],
  ["TRABECTEDINA","YONDELIS 1 MG FCO AMP"],
  ["TRASTUZUMAB","HERCEPTIN 440 MG X 50 ML AMP"],
  ["TRASTUZUMAB","HERCEPTIN SC 600 mg/5 ml vial x 1"],
  ["TRASTUZUMAB","TRAZIMERA 440 mg f.a. x 1+ solv."],
  ["TRASTUZUMAB","TUZEPTA 440 mg f.a. x 1+ solv."],
  ["TRASTUZUMAB EMTANSINA","KADCYLA 100 MG X 1 VIAL x 1"],
  ["TRASTUZUMAB EMTANSINA","KADCYLA 160 MG X 1 VIAL x 1"],
  ["TRIPTORELINA","DECAPEPTYL RETARD IM 3.75 MG KIT"],
  ["TRIPTORELINA","DECAPEPTYL RETARD IM 11.25 MG KIT"],
  ["USTEKINUMAB","STELARA 90 MG/1 ML VIAL+J.PRELL"],
  ["USTEKINUMAB","STELARA IV 130MG/26ML VIAL"],
  ["VEDOLIZUMAB","ENTYVIO 300 MG VIAL"],
  ["VEDOLIZUMAB","ENTYVIO SC JGA PRELL"],
  ["VINBLASTINA","VINBLASTINA KEMEX 10MG x 1"],
  ["VINCRISTINA","VINCRISTINA KEMEX 1 MG INY.A.X 1"],
  ["VINCRISTINA","VINCRISTINA LKM 1 1 MG INY.A.X 1"],
  ["VINORELBINE","VINOREL 10 MG FCO AMP"]
].map(([droga, medicamento]) => ({
  financiador: "Colegio de Escribanos de la Provincia",
  droga,
  medicamento,
  auditoria: "No informado"
})));

MEDICAMENTOS.push(...[
  ["MICOFENOLATO MOFETIL","CELLCEPT - 500 MG COMP.X 50"],
  ["MICOFENOLATO MOFETIL","MMF SANDOZ - 500 MG COMP.REC.X 50"],
  ["TACROLIMUS","PROGRAF - 1 MG CÁPS.X 100"],
  ["TACROLIMUS","TACROLIMUS SANDOZ - 1 MG CÁPS.X 100"],
  ["TACROLIMUS","PROGRAF - 5 MG CÁPS.X 50"],
  ["TACROLIMUS","TACROLIMUS SANDOZ - 5 MG CÁPS.X 50"],
  ["TACROLIMUS","PROGRAF - 5 MG INY.A.X 1"],
  ["TACROLIMUS","PROGRAF - 0.5 MG CÁPS.X 50"],
  ["TACROLIMUS","TACROLIMUS SANDOZ - 0.5 MG CÁPS.X 50"],
  ["TACROLIMUS","PROGRAF XL - 0.5MG CÁPS.ACC.PROL.X 50"],
  ["TACROLIMUS","PROGRAF XL - 1 MG CÁPS.ACC.PROL.X 50"],
  ["TACROLIMUS","PROGRAF XL - 5 MG CÁPS.ACC.PROL.X 50"],
  ["BACILO CALMETTE-GUERIN (BCG)","CARCIVAC - 40 MG F.A. X 3"],
  ["MYCOBACTERIUM BOVIS","BCG CULTIVO AJV - F.A.X 4"],
  ["MELFALANO","ERIOLAN - 50 MG INY.F.A.X 1"],
  ["CARBOPLATINO","CARBOPLATINO TUTEUR - 450 MG INY.LIOF.F.A.X 1"],
  ["CARBOPLATINO","CARBOPLATINO DELTA FARMA - 450 MG INY.LIOF.F.A.X 1"],
  ["CARBOPLATINO","CARBOPLATINO MICROSULES - 450 MG INY.F.A.X 1"],
  ["CARBOPLATINO","CARBOPLATINO MARTIAN - 450 MG INY.LIOF.F.A.X 1"],
  ["CARBOPLATINO","OMILIPIS - 450 MG INY.LIOF.F.A.X 1"],
  ["CARBOPLATINO","CARBOPLATINO VARIFARMA - 450 MG INY.LIOF.F.A.X 1"],
  ["CARBOPLATINO","CARBOKEBIR - 450 MG INY.LIOF.F.A.X 1"],
  ["CARBOPLATINO","CARBOPLATINO GLENMARK - 450 MG LIOF.F.A.X 1"],
  ["INTERFERÓN ALFA 2B","BIOFERON - 3000000UI LIOF.F.A.+DIL."],
  ["CARBOPLATINO","CARBOXTIE - 150 MG INY.F.A.X 1"],
  ["CARBOPLATINO","CARBOPLATINO DELTA FARMA - 150 MG INY.LIOF.F.A.X 1"],
  ["CARBOPLATINO","CARBOPLATINO TUTEUR - 150 MG INY.LIOF.F.A.X 1"],
  ["CARBOPLATINO","CARBOPLATINO MARTIAN - 150 MG INY.LIOF.F.A.X 1"],
  ["CARBOPLATINO","CARBOPLATINO MICROSULES - 150 MG INY.F.A.X 1"],
  ["CARBOPLATINO","OMILIPIS - 150 MG INY.LIOF.F.A.X 1"],
  ["CARBOPLATINO","CARBOPLATINO VARIFARMA - 150 MG INY.LIOF.F.A.X 1"],
  ["CARBOPLATINO","CARBOPLATINO GLENMARK - 150 MG LIOF.F.A.X 1"],
  ["CARBOPLATINO","CARBOKEBIR - 150 MG INY.LIOF.F.A.X 1"],
  ["CICLOFOSFAMIDA","CICLOFOSFAMIDA KEMEX 200 MG - 200 MG INY.F.A.X 5"],
  ["CICLOFOSFAMIDA","CICLOFOSFAMIDA MICROSULES - 200 MG F.A.LIOF.X 6"],
  ["CISPLATINO","CISPLATINO TUTEUR - 10 MG/20 ML F.A.X 1"],
  ["CISPLATINO","CISPLATINO DELTA FARMA - 10 MG INY.F.A.X 1"],
  ["CISPLATINO","CISPLATINO LKM - 50 MG F.A.X 1"],
  ["CISPLATINO","CISPLATINO TUTEUR - 50 MG/100 ML F.A.X 1"],
  ["CISPLATINO","CISPLATINO MICROSULES - 50 MG F.A.X 1"],
  ["CISPLATINO","CISPLATINO DELTA FARMA - 50 MG INY.F.A.X 1"],
  ["CISPLATINO","CISPLATINO GLENMARK - 50 MG INY.LIOF.F.A.X 1"],
  ["CLORAMBUCILO","LEUKERAN - 2 MG GRAG.X 25"],
  ["METILPREDNISOLONA","METILPREDNISOLONA RICHET - 500 MG INY.F.A.+A.SOLV."],
  ["METILPREDNISOLONA","FADA METILPREDNISOLONA - 500 MG INY.F.A.X 5"],
  ["METILPREDNISOLONA","CORTISOLONA - 500 MG F.A.X 25"],
  ["METILPREDNISOLONA","METILPREDNISOLONA PHARMAVIAL - 500 MG F.A.C/SOLV.X 100"],
  ["DACTINOMICINA","COSMEGEN - 0.5 MG INY.A.X 1"],
  ["ETOPÓSIDO","VP-GEN - 100 MG A.X 1"],
  ["ETOPÓSIDO","EUVAXON - 100 MG/5 ML INY.F.A.X 1"],
  ["ETOPÓSIDO","ETOPOSIDO DELTA FARMA - 100 MG INY.F.A.X 1"],
  ["ETOPÓSIDO","ETOPOSIDO MICROSULES - 100 MG INY.A.X 1 X 5 ML"],
  ["LEUCOVORINA","LEUCOVORINA CALCICA TUTEUR - 50 MG/5 ML F.A.X 1"],
  ["LEUCOVORINA","LEUCOVORINA DELTA FARMA - 50 MG INY.LIOF.F.A.X 1"],
  ["LEUCOVORINA","NOVIZET - 50 MG INY.LIOF.F.A.X 1"],
  ["LEUCOVORINA","RONTAFOR - 50 MG F.A.X 25"],
  ["LEUCOVORINA","LEUCOCALCIN - 15 MG COMP.X 10"],
  ["LEUCOVORINA","LEUCOVORINA DELTA FARMA - 15 MG COMP.X 10"],
  ["LEUCOVORINA","LEUCOVORINA RICHET - 15 MG COMP.X 40"],
  ["FLUOROURACILO","FLUOROURACILO TUTEUR - 500 MG/10 ML A.X 5"],
  ["FLUOROURACILO","FLUOROURACILO LKM 500 - 500 MG INY.A.X 4"],
  ["FLUOROURACILO","TRIOSULES - 500 MG INY.A.X 5 X 10 ML"],
  ["FLUOROURACILO","FLUOROURACILO KEMEX - 500 MG A.X 5 X 10 ML"],
  ["INTERFERÓN ALFA 2B","BIOFERON - 5000000UI LIOF.F.A.+DIL."],
  ["MELFALANO","MELFALAN VARIFARMA - 2 MG COMP.X 25"],
  ["METOTREXATO","METOTREXATO MARTIAN - 500 MG F.A.X 1"],
  ["METOTREXATO","METOTREXATE TEVA - 500 MG/20 ML F.A.X 1"],
  ["METOTREXATO","METOTREXATO MICROSULES - 500 MG INY.F.A.X 1"],
  ["METOTREXATO","METOTREXATO MICROSULES - 1000 MG INY.F.A.X 1"],
  ["BICALUTAMIDA","CASODEX - 50 MG COMP.X 28"],
  ["BICALUTAMIDA","GEPEPROSTIN 50 MG - 50 MG COMP.REC.X 30"],
  ["BICALUTAMIDA","RAFFOLUTIL - 50 MG COMP.REC.X 30"],
  ["BICALUTAMIDA","BICALUTAMIDA DELTA FARMA - 50 MG COMP.X 28"],
  ["BICALUTAMIDA","BIDROSTAT - 50 MG COMP.X 28"],
  ["BICALUTAMIDA","BICALUTAMIDA VARIFARMA - 50 MG COMP.X 28"],
  ["BICALUTAMIDA","FINABAND - 50 MG COMP.X 30"],
  ["BICALUTAMIDA","BITAKEBIR - 50 MG COMP.X 28"],
  ["BICALUTAMIDA","BICALUTAMIDA TECHSPHERE - 50 MG COMP.X 30"],
  ["BICALUTAMIDA","BICALUTAMIDA IMA - 50 MG COMP.X 28"],
  ["BICALUTAMIDA","BICALUTAMIDA KEMEX - 50 MG COMP.REC.X 28"],
  ["GOSERELIN,ACETATO","ZOLADEX - 3.6 MG DEPOT X 1"],
  ["HIDROXIUREA","HIDROXIUREA LKM 500 - 500 MG CÁPS.X 100"],
  ["HIDROXIUREA","HIDROXIUREA DELTA FARMA - 500 MG CÁPS.X 100"],
  ["HIDROXIUREA","HIDROXIUREA VARIFARMA - 500 MG CÁPS.X 100"],
  ["HIDROXIUREA","HIDROXIUREA KEMEX - 500 MG CÁPS.X 100"],
  ["HIDROXIUREA","HIDROXIUREA ECZANE - 500 MG CÁPS.X 100"],
  ["PACLITAXEL","CLITAXEL - 30 MG F.A.X 1"],
  ["PACLITAXEL","TAXOCRIS - 30 MG A.X 5"],
  ["PACLITAXEL","TARVEXOL - 30 MG F.A.X 1"],
  ["PACLITAXEL","DRIFEN - 30 MG F.A.X 5 ML"],
  ["PACLITAXEL","PANATAXEL - 30 MG F.A.X 1 X 5 ML"],
  ["PACLITAXEL","PACLITAXEL DELTA FARMA - 30 MG INY.F.A.X 1"],
  ["PACLITAXEL","PACLITAXEL VARIFARMA - 30 MG F.A.X 1 X 5 ML"],
  ["PACLITAXEL","PACLITAXEL MICROSULES - 30 MG INY.F.A.X 1 X 5 ML"],
  ["PACLITAXEL","PACLIKEBIR - 30 MG INY.F.A.X 1"],
  ["PACLITAXEL","PACLITAXEL GLENMARK - 30 MG F.A.X 1 X 5 ML"],
  ["PACLITAXEL","PACLITAXEL TECHSPHERE - 30 MG INY.F.A.X 1"],
  ["PACLITAXEL","PACLITAXEL BIOTECHNO - 30 MG INY.F.A.X 1 X 5 ML"],
  ["PACLITAXEL","PACLITAXEL TUTEUR - 30 MG/5 ML F.A.X 1"],
  ["PACLITAXEL","PACLITAXEL IMA - 30 MG SOL.INY.X 1"],
  ["PACLITAXEL","PACLINOVA - 30 MG VIAL X 1 X 5 ML"],
  ["PACLITAXEL","PACLITAXEL KEMEX - 30 MG F.A.X 1"],
  ["TRETINOÍNA","VESANOID - 10 MG CÁPS.X 100"],
  ["TEMOZOLOMIDA","ZOLOM - 20 MG CÁPS.X 5"],
  ["TEMOZOLOMIDA","TEZULINA - 20 MG CÁPS.X 5"],
  ["TEMOZOLOMIDA","DRALITEM - 20 MG CÁPS.X 21"],
  ["TEMOZOLOMIDA","RUMALAR - 20 MG CÁPS.X 5"],
  ["TEMOZOLOMIDA","VARIZOLAMIDA - 20 MG CÁPS.X 5"],
  ["TEMOZOLOMIDA","TOCITRAP - 20 MG CÁPS.X 21"],
  ["TEMOZOLOMIDA","TEMONOVA 20 - 20 MG CÁPS.X 5"],
  ["TEMOZOLOMIDA","TEMODAL - 100 MG CÁPS.X 5"],
  ["TEMOZOLOMIDA","ZOLOM - 100 MG CÁPS.X 5"],
  ["TEMOZOLOMIDA","TEZULINA - 100 MG CÁPS.X 5"],
  ["TEMOZOLOMIDA","DRALITEM - 100 MG CÁPS.X 21"],
  ["TEMOZOLOMIDA","RUMALAR - 100 MG CÁPS.X 5"],
  ["TEMOZOLOMIDA","VARIZOLAMIDA - 100 MG CÁPS.X 5"],
  ["TEMOZOLOMIDA","TOCITRAP - 100 MG CÁPS.X 21"],
  ["TEMOZOLOMIDA","TEMONOVA 100 - 100 MG CÁPS.X 5"],
  ["TEMOZOLOMIDA","KEMTAX - 100 MG CÁPS.X 5"],
  ["TEMOZOLOMIDA","TEMOXAN 100 - 100 MG CÁPS.X 5"],
  ["TEMOZOLOMIDA","TEMODAL - 250 MG CÁPS.X 5"],
  ["TEMOZOLOMIDA","DRALITEM - 250 MG CÁPS.X 5"],
  ["TEMOZOLOMIDA","TOCITRAP - 250 MG CÁPS.X 5"],
  ["TEMOZOLOMIDA","ZOLOM - 250 MG CÁPS.X 5"],
  ["TEMOZOLOMIDA","TEZULINA - 250 MG CÁPS.X 5"],
  ["TEMOZOLOMIDA","RUMALAR - 250 MG CÁPS.X 5"],
  ["TEMOZOLOMIDA","VARIZOLAMIDA - 250 MG CÁPS.X 5"],
  ["TEMOZOLOMIDA","TEMONOVA 250 - 250 MG CÁPS.X 5"],
  ["TEMOZOLOMIDA","KEMTAX - 250 MG CÁPS.X 5"],
  ["TEMOZOLOMIDA","TEMOXAN 250 - 250 MG CÁPS.X 5"],
  ["CAPECITABINA","XELODA - 500 MG COMP.X 120"],
  ["CAPECITABINA","CATEGOR - 500 MG COMP.X 120"],
  ["CAPECITABINA","CAPEFAS - 500 MG COMP.REC.X 120"],
  ["CAPECITABINA","CAPEBINA - 500 MG COMP.X 120"],
  ["CAPECITABINA","CAPECIT - 500 MG COMP.X 120"],
  ["CAPECITABINA","DEREBEL - 500 MG COMP.X 120"],
  ["CAPECITABINA","CAPECITABINA VARIFARMA - 500 MG COMP.X 120"],
  ["CAPECITABINA","CATEPEN - 500 MG COMP.REC.X 120"],
  ["CAPECITABINA","CAPECTAN - 500 MG COMP.REC.X 120"],
  ["CAPECITABINA","CAPECITABINA TECHSPHERE - 500 MG COMP.X 120"],
  ["CAPECITABINA","CAPECITABINA GLENMARK - 500 MG COMP.REC.X 120"],
  ["CAPECITABINA","XITABIN - 500 MG COMP.X 120"],
  ["CAPECITABINA","CAPTECH - 500 MG COMP.X 120"],
  ["CAPECITABINA","CAPECINOVA - 500 MG COMP.REC.X 120"],
  ["CAPECITABINA","IMACAP - 500 MG COMP.REC.X 120"],
  ["CAPECITABINA","BODABINA - 500 MG COMP.REC.X 120"],
  ["CAPECITABINA","CAPEXAN - 500 MG COMP.X 120"],
  ["GOSERELIN,ACETATO","ZOLADEX LA - 10.8 MG DEPOT X 1"],
  ["MEPREDNISONA","CORTIPYREN B - 40 MG COMP.X 20"],
  ["MEPREDNISONA","DELTISONA B - 40 MG COMP.X 20"],
  ["MEPREDNISONA","PREDNISONAL - 40 MG COMP.X 20"],
  ["MEPREDNISONA","MEPREDNISONA RICHET - 40 MG COMP.X 20 (TRZB)"],
  ["MEPREDNISONA","RUPESONA B - 40 MG COMP.X 20"],
  ["MEPREDNISONA","LA MEPREDNISONA - 40 MG COMP.X 20"],
  ["MEPREDNISONA","GALLCORT - 40 MG COMP.X 20"],
  ["MEPREDNISONA","DELTACORT - 40 MG COMP.X 20"],
  ["TAMOXIFENO","TAMOXIFENO GADOR - 10 MG COMP.X 30"],
  ["FLUTAMIDA","FLUTAMIDA MICROSULES - 250 MG COMP.REC.X 60"],
  ["METOTREXATO","ARTRAIT - 10 MG COMP.RAN.X 10"],
  ["METOTREXATO","ERVEMIN - 10 MG COMP.X 10"],
  ["APREPITANT","EMEND - TRIPACK CÁPS.X 1+CÁPS.X2"],
  ["FULVESTRANT","FASLODEX - 250MG JGA.PRELL.X2 X5 ML"],
  ["FULVESTRANT","NILGABAN - 250MG/5ML A.X 2+KIT ADM."],
  ["FULVESTRANT","OLVESTRAN - 250 MG JGA.PRELL.X 5 ML"],
  ["FULVESTRANT","KEMFLUD 250 MG - A.X 2 X 5 ML+KIT ADMIN."],
  ["FULVESTRANT","TRIMICRO - 250 MG F.A.X 2 X 5 ML"],
  ["FULVESTRANT","DIMERE - 250 MG A.X 2+KIT ADMIN."],
  ["FULVESTRANT","FAVESAN - 250 MG A.X 2+KIT ADMIN."],
  ["FULVESTRANT","FULL V - F.A.X 2 X5 ML+KIT ADMIN."],
  ["FULVESTRANT","FURANEMIK - 250 MG/5 ML JGA.PRELL.X2"],
  ["FULVESTRANT","FULVESTRANT SANDOZ - 250MG JGA.PRELL.X2 X5 ML"],
  ["TEMOZOLOMIDA","TEMODAL - 140 MG CÁPS.X 5"],
  ["TEMOZOLOMIDA","DRALITEM - 140 MG CÁPS.X 21"],
  ["TEMOZOLOMIDA","TOCITRAP - 140 MG CÁPS.X 21"],
  ["TEMOZOLOMIDA","KEMTAX - 140 MG CÁPS.X 5"],
  ["BENDAMUSTINA,CLORH.","BENDAVAR - 25 MG FCO.A.X 1"],
  ["BENDAMUSTINA,CLORH.","ESEVARIL - 25 MG F.A.X 1"],
  ["BENDAMUSTINA,CLORH.","ERIOTIB - 25 MG PVO.LIOF.VIAL X 1"],
  ["BENDAMUSTINA,CLORH.","BENDAM - 25 MG F.A.X 1"],
  ["BENDAMUSTINA,CLORH.","BENZIMIR - 25 MG F.A.X 1"],
  ["BENDAMUSTINA,CLORH.","BEMUX - 25 MG F.A.LIOF.X 1"],
  ["BENDAMUSTINA,CLORH.","MEXED - 25 MG F.A.LIOF.X 1"],
  ["BENDAMUSTINA,CLORH.","MUBETIN - 25 MG F.A.X 1"],
  ["BENDAMUSTINA,CLORH.","ADESIAL - 25 MG F.A.X 1"],
  ["BENDAMUSTINA,CLORH.","BENDAVAR - 100 MG FCO.A.X 1"],
  ["BENDAMUSTINA,CLORH.","ESEVARIL - 100 MG F.A.X 1"],
  ["BENDAMUSTINA,CLORH.","ENDEXIN 100 - 100 MG F.A.X 1"],
  ["BENDAMUSTINA,CLORH.","ERIOTIB - 100 MG PVO.LIOF.VIAL X 1"],
  ["BENDAMUSTINA,CLORH.","BENDAM - 100 MG F.A.X 1"],
  ["BENDAMUSTINA,CLORH.","BENZIMIR - 100 MG F.A.X 1"],
  ["BENDAMUSTINA,CLORH.","BEMUX - 100 MG F.A.LIOF.X 1"],
  ["BENDAMUSTINA,CLORH.","MEXED - 100 MG F.A.LIOF.X 1"],
  ["BENDAMUSTINA,CLORH.","MUBETIN - 100 MG F.A.X 1"],
  ["BENDAMUSTINA,CLORH.","BENDAMUSTINA GLENMARK - 100 MG F.A.LIOF.X 1"],
  ["BENDAMUSTINA,CLORH.","QUERAMUS - 100 MG PVO.LIOF.X 1"],
  ["BENDAMUSTINA,CLORH.","BENDEL - 100 MG F.A.X 1"],
  ["BENDAMUSTINA,CLORH.","ADESIAL - 100 MG F.A.X 1"],
  ["DEGARELIX","FIRMAGON - 80MG INY.PVOF.A.PRELL.X1"],
  ["DEGARELIX","FIRMAGON - 120MG INY.PVOF.A.PRELLX2"],
  ["FOSAPREPITANT DIMEGLUMINA","EMEND IV - 1 VIAL X 10 ML"],
  ["BLEOMICINA","BLEOCRIS - 15 MG INY.LIOF.F.A.X 1"],
  ["BLEOMICINA","BILECO - INY.A.X 1"],
  ["CICLOFOSFAMIDA","CICLOFOSFAMIDA LKM 1000 MG - 1000 MG INY.F.A.X 1"],
  ["CICLOFOSFAMIDA","CICLOFOSFAMIDA MICROSULES - 1000 MG F.A.X 1"],
  ["CICLOFOSFAMIDA","CICLOFOSFAMIDA KEMEX 1000 MG - 1000 MG INY.F.A.X 1"],
  ["CITARABINA","CITARABINA LKM 100 - INY.LIOF.F.A.X 1"],
  ["CITARABINA","CITARABINA MICROSULES - 100 MG LIOF.F.A.X 1"],
  ["CITARABINA","CITARABINA LKM 1000 - INY.LIOF.F.A.X 1"],
  ["CITARABINA","CITARABINA MICROSULES - 1000 MG LIOF.F.A.X 1"],
  ["DACARBAZINA","ONCOCARBIL 200 - 200 MG INY.LIOF.F.A.X 1"],
  ["DACARBAZINA","DACARBAZINA VARIFARMA - 200 MG INY.F.A.X 1"],
  ["DAUNORUBICINA (DAUNOMICINA)","MAXIDAUNO - 20 MG F.A.X 1"],
  ["DOCETAXEL","DOCETAXEL DELTA FARMA - 20 MG F.A.X 1"],
  ["DOCETAXEL","PLUSTAXANO ANHIDRO 20 - 20 MG F.A.X 1+DISOLV.X 1"],
  ["DOCETAXEL","DOCETAXEL VARIFARMA - 20 MG F.A.X 1 X 0.5 ML"],
  ["DOCETAXEL","DOCETAXEL MICROSULES - 20 MG F.A.X 1 X 0.5 ML"],
  ["DOCETAXEL","DONATAXEL - 20 MG F.A.X 1"],
  ["DOCETAXEL","DOCEKEBIR - 20 MG F.A.X 1+DISOLV.X 1"],
  ["DOCETAXEL","ERIOX - 20 MG F.A.INY.X1 X0.5 ML"],
  ["DOCETAXEL","DOCETAXEL TUTEUR - 20 MG F.A.+SOLV.X 1"],
  ["DOCETAXEL","DOCETAXEL SANDOZ - 20 MG/2 ML VIAL X 1"],
  ["DOCETAXEL","DOCETAXEL SOL IMA - 20 MG F.A.X 1+DILUY."],
  ["DOCETAXEL","DOXETAL - 20 MG/1 ML INY.F.A.X 1"],
  ["DOCETAXEL","DOCETAXEL KEMEX - 20 MG F.A.X 1+DILUY."],
  ["DOCETAXEL","IMAXEL - 20 MG/4 ML F.A.X 1"],
  ["DOCETAXEL","DOLECTRAN NF - 80 MG F.A.X 1+DISOLV."],
  ["DOCETAXEL","DOCETAXEL DELTA FARMA - 80 MG F.A.X 1"],
  ["DOCETAXEL","PLUSTAXANO ANHIDRO 80 - 80 MG F.A.X 1+DISOLV.X 1"],
  ["DOCETAXEL","DOCETAXEL VARIFARMA - 80 MG F.A.X 1 X 2.0 ML"],
  ["DOCETAXEL","DOCETAXEL MICROSULES - 80 MG F.A.X 1 X 2 ML"],
  ["DOCETAXEL","DONATAXEL - 80 MG F.A.X 1"],
  ["DOCETAXEL","DOCETAXEL GLENMARK - 80 MG F.A.X 1+SOLV."],
  ["DOCETAXEL","DOCEKEBIR - 80 MG F.A.X 1+DISOLV.X 1"],
  ["DOCETAXEL","ERIOX - 80 MG F.A.INY.X1 X2.0 ML"],
  ["DOCETAXEL","DOCETAXEL TUTEUR - 80 MG F.A.+SOLV.X 1"],
  ["DOCETAXEL","DOCETAXEL SANDOZ - 80 MG/8 ML VIAL X 1"],
  ["DOCETAXEL","DOCETAXEL SOL IMA - 80 MG F.A.X 1+DILUY."],
  ["DOCETAXEL","DOXETAL - 80 MG/4 ML F.A.X 1"],
  ["DOCETAXEL","DOCETAXEL KEMEX - 80 MG F.A.X 1+DILUY."],
  ["DOCETAXEL","IMAXEL - 80 MG/4 ML F.A.X 1"],
  ["DOXORUBICINA","DOXOCRIS - 50 MG F.A.X 1"],
  ["DOXORUBICINA","DOXTIE - 50 MG INY.F.A.X 1"],
  ["DOXORUBICINA","DICLADOX - 50 MG F.A.X 1"],
  ["DOXORUBICINA","DOXORUBICINA DELTA FARMA - 50 MG F.A.X 1"],
  ["DOXORUBICINA","ROXORIN - 50 MG LIOF.F.A.X 1"],
  ["DOXORUBICINA","COLHIDROL - 50 MG PVO.LIOF.A.X 1"],
  ["DOXORUBICINA","ONKOSTATIL - 50 MG F.A.X 1"],
  ["DOXORUBICINA","DOXORUBICINA GLENMARK - 50 MG LIOF.F.A.X 1"],
  ["DOXORUBICINA","DOXOKEBIR - 50 MG F.A.X 1"],
  ["DOXORUBICINA","DOXORUBICINA IMA - 50 MG LIOF.F.A.X 1"],
  ["EPIRUBICINA","EPIRUBICINA DELTA FARMA - 50 MG INY.F.A.X 1"],
  ["EPIRUBICINA","CRISABON - 50 MG F.A.X 1"],
  ["EPIRUBICINA","CUATROEPI - 50 MG A.X 1"],
  ["EPIRUBICINA","EPIRUBICINA GLENMARK - 50 MG INY.LIOF.F.A.X 1"],
  ["EPIRUBICINA","EPIRUBICINA IMA - 50 MG INY.LIOF.F.A.X 1"],
  ["FLUDARABINA","FLUDARABINA MICROSULES - 50 MG INY.F.A.X 5"],
  ["FLUDARABINA","FLUDAKEBIR - 50 MG F.A.LIOF.X 5"],
  ["FLUDARABINA","FLUDARABINA IMA - 50 MG INY.F.A.LIOF.X 1"],
  ["GEMCITABINA","GEMTRO - 1 G F.A.X 1"],
  ["GEMCITABINA","ANTORIL - 1 G F.A.X 1"],
  ["GEMCITABINA","GEZT - 1 G F.A.X 1"],
  ["GEMCITABINA","GRAMAGEN - 1000 MG F.A.X 1"],
  ["GEMCITABINA","GESTREDOS - 1000 MG A.X 1"],
  ["GEMCITABINA","ERIOGEM - 1000 MG F.A.INY.LIOF.X 1"],
  ["GEMCITABINA","NABIGEM - 1000 MG F.A.INY.LIOF.X 1"],
  ["GEMCITABINA","GEMCITABINA VARIFARMA - 1000 MG F.A.X 1"],
  ["GEMCITABINA","GEBINA - 1000 MG F.A.X 1"],
  ["GEMCITABINA","GEMBIO - 1 G F.A.INY.LIOF.X 1"],
  ["GEMCITABINA","GEMCITABINA GLENMARK - 1000 MG LIOF.INY.F.A.X 1"],
  ["GEMCITABINA","GEMCITABINA IMA - 1000 MG PVO.LIOF.X 1"],
  ["GEMCITABINA","GEMCINOVA 1000 - 1000 MG F.A.X 1"],
  ["GEMCITABINA","IBOLYA - 1 G X F.A.X 1"],
  ["GEMCITABINA","GEMTRO - 200 MG F.A.X 1"],
  ["GEMCITABINA","ANTORIL - 200 MG F.A.X 1"],
  ["GEMCITABINA","GEZT - 200 MG F.A.X 1"],
  ["GEMCITABINA","GRAMAGEN - 200 MG F.A.X 1"],
  ["GEMCITABINA","GESTREDOS - 200 MG A.X 1"],
  ["GEMCITABINA","ERIOGEM - 200 MG F.A.INY.LIOF.X 1"],
  ["GEMCITABINA","NABIGEM - 200 MG F.A.INY.LIOF.X 1"],
  ["GEMCITABINA","GEMCITABINA VARIFARMA - 200 MG F.A.X 1"],
  ["GEMCITABINA","GEBINA - 200 MG F.A.X 1"],
  ["GEMCITABINA","GEMBIO - 200 MG F.A.INY.LIOF.X 1"],
  ["GEMCITABINA","GEMCITABINA IMA - 200 MG PVO.LIOF.X 1"],
  ["GEMCITABINA","IBOLYA - 200 MG X F.A.X 1"],
  ["IDARRUBICINA","IDARRUBICINA 5 DOSA - 5 MG INY.F.A.X 1+SOLV."],
  ["IDARRUBICINA","IDARRUBICINA 10 DOSA - 10 MG INY.F.A.X 1+SOLV."],
  ["IDARRUBICINA","IDARUBICINA VARIFARMA - 10 MG LIOF.F.A.X 1"],
  ["IDARRUBICINA","IDARUBICINA IMA - 10 MG LIOF.F.A.X 1"],
  ["IRINOTECAN","ITOXARIL 100 - 100 MG F.A.X 1"],
  ["IRINOTECAN","SIBUDAN - 100 MG INY.F.A.X 1"],
  ["IRINOTECAN","CPT 11 - 100 MG INY.F.A.X 1 X 5ML"],
  ["IRINOTECAN","IRINOGEN - 100 MG INY.F.A.X 1"],
  ["IRINOTECAN","IRINOTECAN DELTA FARMA - 100 MG INY.F.A.X 1"],
  ["IRINOTECAN","PIPETECAN - 100 MG INY.F.A.X 5 ML"],
  ["IRINOTECAN","KEBIRTECAN - 100 MG INY.F.A.X 1"],
  ["IRINOTECAN","SATIGENE - INY.F.A.X 1"],
  ["IRINOTECAN","IRINOTECAN GLENMARK - 100 MG INY.F.A.X 1 X 5ML"],
  ["IRINOTECAN","TIAGREL - 100 MG INY.F.A.X 1 X 5ML"],
  ["IRINOTECAN","IRINOTECAN IMA - 100 MG F.A.X 1"],
  ["IRINOTECAN","IRINOTECAN KEMEX - 100 MG F.A. X 1"],
  ["IFOSFAMIDA","IFOCRIS - 1 G F.A.X 1"],
  ["IFOSFAMIDA","IFOSFAMIDA MICROSULES - 1 G INY.F.A.X 1"],
  ["IFOSFAMIDA","IFOSFAMIDA DELTA FARMA - 1 G INY.F.A.X 1"],
  ["IFOSFAMIDA","IFOSFAMIDA VARIFARMA - 1 G INY.F.A.X 1"],
  ["IFOSFAMIDA","IFX - 1 G F.A.X 1"],
  ["MERCAPTOPURINA","PURINETHOL - 50 MG COMP.X 25"],
  ["MERCAPTOPURINA","VARIMER - 50 MG COMP.X 25"],
  ["METOTREXATO","METOTREXATO MARTIAN - 50 MG F.A.X 1"],
  ["METOTREXATO","METOTREXATE TUTEUR - 50 MG/2 ML F.A.X 1"],
  ["METOTREXATO","METOTREXATO MICROSULES - 50 MG INY.F.A.X 1"],
  ["MITOXANTRONA","MITOXGEN - 20 MG INY.F.A.X 10 ML"],
  ["MITOMICINA","MITOMICINA LKM 20 - 20 MG INY.F.A.X 1"],
  ["MITOMICINA","MAXIMITON - 20 MG F.A.X 1"],
  ["MITOMICINA","MITOMICINA C DELTA FARMA - 20 MG INY.F.A.X 1"],
  ["MITOMICINA","CRISOFIMINA - 20 MG F.A.X 1"],
  ["MITOMICINA","MITOTIE - 20 MG F.A.X 1"],
  ["MITOMICINA","MITOMICINA MICROSULES - 20 MG INY.LIOF.F.A.X 1"],
  ["MITOMICINA","MITOKEBIR - 20 MG F.A.X 1"],
  ["MITOMICINA","MITOMICINA C DELTA FARMA - 5 MG INY.F.A.X 1"],
  ["OXALIPLATINO","CRISAPLA - 50 MG F.A.X 1"],
  ["OXALIPLATINO","OXALIPLATINO DELTA FARMA - 50 MG F.A.X 1"],
  ["OXALIPLATINO","XALIPLAT - 50 MG F.A.X 1"],
  ["OXALIPLATINO","METAPLATIN - 50 MG F.A.X 1"],
  ["OXALIPLATINO","OXALIPLATINO VARIFARMA - 50 MG F.A.X 1"],
  ["OXALIPLATINO","OXALTIE - 50 MG INY.F.A.X 1"],
  ["OXALIPLATINO","KEBIR - 50 MG F.A.LIOF.P/PERF.X1"],
  ["OXALIPLATINO","MITOG - 50 MG F.A.X 1"],
  ["OXALIPLATINO","OXALIPLATINO GLENMARK - 50 MG LIOF.F.A.X 1"],
  ["OXALIPLATINO","GOXYRAL - 50 MG F.A.INY.LIOF.X 1"],
  ["OXALIPLATINO","OLIPTINO - 50 MG LIOF.F.A.X 1"],
  ["OXALIPLATINO","OXALIPLATINO KEMEX - 50 MG F.A.LIOF.X 1"],
  ["OXALIPLATINO","OXALINOVA 50 - 50 MG LIOF.F.A.X 1"],
  ["OXALIPLATINO","UXALUN - 50 MG/10 ML LIVI"],
  ["OXALIPLATINO","CRISAPLA - 100 MG F.A.X 1"],
  ["OXALIPLATINO","OXALIPLATINO DELTA FARMA - 100 MG F.A.X 1"],
  ["OXALIPLATINO","XALIPLAT - 100 MG F.A.X 1"],
  ["OXALIPLATINO","METAPLATIN - 100 MG F.A.X 1"],
  ["OXALIPLATINO","OXALIPLATINO VARIFARMA - 100 MG F.A.X 1"],
  ["OXALIPLATINO","OXALTIE - 100 MG INY.F.A.X 1"],
  ["OXALIPLATINO","KEBIR - 100MG F.A.LIOF.P/PERF.X1"],
  ["OXALIPLATINO","MITOG - 100 MG F.A.X 1"],
  ["OXALIPLATINO","OXALIPLATINO GLENMARK - 100 MG LIOF.F.A.X 1"],
  ["OXALIPLATINO","GOXYRAL - 100 MG F.A.INY.LIOF.X 1"],
  ["OXALIPLATINO","OLIPTINO - 100 MG LIOF.F.A.X 1"],
  ["OXALIPLATINO","OXALIPLATINO KEMEX - 100 MG F.A.LIOF.X 1"],
  ["OXALIPLATINO","OXALINOVA 100 - 100 MG LIOF.F.A.X 1"],
  ["OXALIPLATINO","UXALUN - 100 MG/20 ML LIVI"],
  ["PACLITAXEL","PACLITAXEL DELTA FARMA - 100 MG INY.F.A.X 1"],
  ["PACLITAXEL","TAXOCRIS - 100 MG A.X 1"],
  ["PACLITAXEL","PANATAXEL - 100 MG F.A.X 1"],
  ["PACLITAXEL","PACLITAXEL VARIFARMA - 100 MG F.A.X 1 X 17 ML"],
  ["PACLITAXEL","PACLITAXEL MICROSULES - 100 MG INY.F.A.X 1 X17ML"],
  ["PACLITAXEL","PACLIKEBIR - 100 MG INY.F.A.X 1"],
  ["PACLITAXEL","PACLITAXEL GLENMARK - 100 MG F.A.SOL.X 1"],
  ["PACLITAXEL","PACLITAXEL TECHSPHERE - 100 MG INY.F.A.X 1"],
  ["PACLITAXEL","PACLITAXEL TUTEUR - 100 MG/17 ML F.A.X 1"],
  ["PACLITAXEL","PACLITAXEL IMA - 100 MG SOL.INY.X 1"],
  ["PACLITAXEL","PACLINOVA - 100 MG VIAL X 1 X 16.7ML"],
  ["PACLITAXEL","PACLITAXEL KEMEX - 100 MG F.A.X 1"],
  ["PACLITAXEL","CLITAXEL - 150 MG A.X 1"],
  ["PACLITAXEL","DRIFEN - 150 MG F.A.X 25 ML"],
  ["PACLITAXEL","PACLITAXEL DELTA FARMA - 150 MG INY.F.A.X 1"],
  ["PACLITAXEL","PACLITAXEL VARIFARMA - 150 MG F.A.X 1 X 25 ML"],
  ["PACLITAXEL","PANATAXEL - 150 MG F.A.X 1"],
  ["PACLITAXEL","PACLIKEBIR - 150 MG INY.F.A.X 1"],
  ["PACLITAXEL","PACLITAXEL GLENMARK - 150 MG F.A.SOL.X 1X 25ML"],
  ["PACLITAXEL","PACLITAXEL MICROSULES - 150 MG INY.F.A.X 1 X25ML"],
  ["PACLITAXEL","PACLITAXEL TECHSPHERE - 150 MG INY.F.A.X 1"],
  ["PACLITAXEL","PACLITAXEL TUTEUR - 150 MG/25 ML F.A.X 1"],
  ["PACLITAXEL","PACLITAXEL IMA - 150 MG SOL.INY.X 1"],
  ["PACLITAXEL","PACLINOVA - 150 MG VIAL X 1 X 25 ML"],
  ["PACLITAXEL","PACLITAXEL KEMEX - 150 MG F.A.X 1"],
  ["TOPOTECAN","TOPOKEBIR - 4 MG INY.F.A.LIOF.X 5"],
  ["TOPOTECAN","TOPOTECAN MICROSULES - 4 MG F.A.X 5"],
  ["VINBLASTINA","VINBLASTINA KEMEX - 10 MG LIOF.F.A.X 1"],
  ["VINCRISTINA","VINCRISTINA LKM 1 - 1 MG INY.A.X 1"],
  ["VINCRISTINA","VINCRISTINA KEMEX - 1 MG INY.A.X 1"],
  ["VINORELBINE","NAVELBINE - 50 MG INY.X 1"],
  ["VINORELBINE","VINKEBIR - 50 MG INY.F.A.X 1"],
  ["VINORELBINE","VINOREL - 50 MG INY.F.A.X 1 X 5 ML"],
  ["ONDANSETRÓN","ZOFRAN LIAM - 8 MG A.X 1"],
  ["ONDANSETRÓN","TIOSALIS - 8 MG F.A.X 1"],
  ["ONDANSETRÓN","ONDANSETRON FABRA - 8 MG A.X 1"],
  ["ONDANSETRÓN","FINABER - 8 MG INY.A.X 5 X 4 ML"],
  ["ONDANSETRÓN","ONDANSETRON GOBBI - 8 MG INY.A. X 1 X 4 ML"],
  ["ONDANSETRÓN","DASENTRON - 8 MG A.X 1"],
  ["ONDANSETRÓN","ESPASEVIT - 8 MG A.X 25 X 4 ML"],
  ["ONDANSETRÓN","ONDANSETRON NORTHIA - 8 MG INY.A.X 25"],
  ["INTERFERÓN ALFA 2B","BIOFERON - 10000000UILIOF.F.A.+DIL."],
  ["ANASTROZOL","ARIMIDEX - COMP.X 28"],
  ["ANASTROZOL","TROZOLITE - 1 MG COMP.REC.X 30"],
  ["ANASTROZOL","GONDONAR - 1 MG COMP.REC.X 30"],
  ["ANASTROZOL","ANEBOL - COMP.X 28"],
  ["ANASTROZOL","DISTALENE - 1 MG COMP.X 28"],
  ["ANASTROZOL","ANASTROZOL MICROSULES - 1 MG COMP.REC.X 28"],
  ["ANASTROZOL","ANASTROZOL TECHSPERE - 1 MG COMP.REC.X 28"],
  ["ANASTROZOL","ANASKEBIR - 1 MG COMP.REC.X 28"],
  ["ANASTROZOL","ANASTROZOL GLENMARK - 1 MG COMP.REC.X 30"],
  ["ANASTROZOL","CROCINON - 1 MG COMP.REC.X 28"],
  ["ANASTROZOL","ANASTRADEX - 1 MG COMP.X 28"],
  ["ANASTROZOL","ANASTROZOL KEMEX - 1 MG COMP.REC.X 30"],
  ["ANASTROZOL","ANASTROZOL ECZANE - 1 MG COMP.REC.X 28"],
  ["ANASTROZOL","ANASTROZOL VARIFARMA - 1 MG COMP.X 30"],
  ["DIETILESTILBESTROL","GOBBIBESTROL - 1 MG COMP.REC.X 30"],
  ["CIPROTERONA","ASOTERON - 50 MG COMP.X 50"],
  ["CIPROTERONA","CIPROTERONA DELTA FARMA - 50 MG COMP.X 50"],
  ["CIPROTERONA","CIPROFARMA - 50 MG COMP.X 50"],
  ["CIPROTERONA","CICLAMIL - 50 MG COMP.X 50"],
  ["CIPROTERONA","CIPROTERONA MICROSULES - 50 MG COMP.X 50"],
  ["CIPROTERONA","ANDROSTAT - 50 MG COMP.X 50"],
  ["CIPROTERONA","CIPROTERONA TECHSPERE - 50 MG COMP.X 50"],
  ["CIPROTERONA","KEBIRTERONA - 50 MG COMP.X 50"],
  ["CIPROTERONA","HITORON - 50 MG COMP.X 50"],
  ["CIPROTERONA","CIPRONOVA - 50 MG COMP.REC.X 50"],
  ["LETROZOL","FEMARA - 2.5 MG COMP.X 30"],
  ["LETROZOL","CENDALON - 2.5 MG COMP.REC.X 30"],
  ["LETROZOL","KEBIRZOL - 2.5 MG COMP.REC.X 30"],
  ["LETROZOL","LETROZOL MICROSULES - 2.5 MG COMP.REC.X 30"],
  ["LETROZOL","LETROZOL VARIFARMA - 2.5 MG COMP.REC.X 30"],
  ["LETROZOL","LETROZOL GLENMARK - 2.5 MG COMP.X 30"],
  ["LETROZOL","LETROZOL TECHSPERE - 2.5 MG COMP.REC.X 30"],
  ["LETROZOL","IDELARA - 2.5 MG COMP.REC.X 30"],
  ["LETROZOL","TROTECH - 2.5 MG COMP.REC.X 30"],
  ["LETROZOL","CRAVETOL - 2.5 MG COMP.REC.X 30"],
  ["LETROZOL","INGELET 2.5 - 2.5 MG COMP.X 30"],
  ["LETROZOL","LETROZOL ECZANE - 2.5 MG COMP.REC.X 30"],
  ["LEUPROLIDE,ACETATO","LECTRUM 7.5 MG - KIT X 1"],
  ["LEUPROLIDE,ACETATO","ELIGARD 7.5 MG - KIT X 1"],
  ["LEUPROLIDE,ACETATO","LEPRID 7.5 - 7.5 MG F.A. KIT X 1"],
  ["MEDROXIPROGESTERONA","LIVOMEDROX - 500 MG CÁPS.X 20"],
  ["MEGESTROL","VARIGESTROL - 160 MG COMP.X 30"],
  ["TAMOXIFENO","TAMOXIS - 20 MG COMP.X 30"],
  ["TAMOXIFENO","NOLVADEX D - 20 MG COMP.X 30"],
  ["TAMOXIFENO","TAMOXIFENO GADOR - 20 MG COMP.X 30"],
  ["TAMOXIFENO","GINARSAN FORTE - 20 MG COMP.X 30"],
  ["TAMOXIFENO","TAMOXIFENO VARIFARMA - 20 MG COMP.X 30"],
  ["TAMOXIFENO","TAMOXIFENO BIOTENK - 20 MG COMP.X 30"],
  ["TAMOXIFENO","TAMOXIFENO MICROSULES - 20 MG COMP.X 30"],
  ["TAMOXIFENO","TAMOXIFENO ECZANE - 20 MG COMP.X 30"],
  ["TRIPTORELINA","DECAPEPTYL RETARD - 3.75MG IM MENSUAL KIT X1"],
  ["LEUPROLIDE,ACETATO","LECTRUM 3.75 MG - KIT X 1"],
  ["MESNA","MESNA GOBBI - 200 MG A.X 15"],
  ["MESNA","VARIMESNA - 200 MG SOL.INY.A.X 15"],
  ["MESNA","FADA MESNA - 200 MG A.X 10"],
  ["FILGRASTIM","NEUTROMAX - 30 MUI (300 MCG) F.A.X 5"],
  ["FILGRASTIM","NEUTROFIL - 30 MU SOL.INY.F.A.X 5"],
  ["FILGRASTIM","FILGEN - 300 MCG JGA.PRELL.X 5"],
  ["FILGRASTIM","NEUTROPINE - 300MCG JGA.PRELL.X5X 1ML"],
  ["PAMIDRONATO DISÓDICO","AMINOMUX - 90 MG INY.LIOF.F.A.X 1"],
  ["PAMIDRONATO DISÓDICO","FADA PAMIDRONATO - 90 MG F.A.X 1+1 DILUY."],
  ["CLADRIBINA","INTOCEL - INY.A.X 7"],
  ["DEXAMETASONA","DEXAMERAL 4 - 4 MG COMP.X 20"],
  ["DEXAMETASONA","DEXATOTAL - 4 MG COMP.RAN.X 20"],
  ["DEXAMETASONA","DEXALAF - 4 MG COMP.X 20"],
  ["DOXORUBICINA","DOXORUBICINA DELTA FARMA - 10 MG F.A.X 1"],
  ["DOXORUBICINA","ROXORIN - 10 MG LIOF.F.A.X 1"],
  ["DOXORUBICINA","ONKOSTATIL - 10 MG F.A.X 1"],
  ["BASILIXIMAB","SIMULECT - 20 MG F.A.X 1+A.DISOLV."],
  ["ONDANSETRÓN","ZOFRAN DR - 4 MG COMP.DISOL.RAP.X 10"],
  ["ONDANSETRÓN","CETRON - 8 MG COMP.X 10"],
  ["ONDANSETRÓN","ONDANSETRON LKM 8 - 8 MG COMP.X 10"],
  ["ONDANSETRÓN","ONDANSETRON FABRA - 8 MG COMP.X 10"],
  ["ONDANSETRÓN","ONDANSETRON RICHET - 8 MG COMP.X 10"],
  ["ONDANSETRÓN","ZOFRAN DR - 8 MG COMP.DISOL.RAP.X 10"],
  ["ONDANSETRÓN","DASENTRON - 8 MG COMP.X 10"],
  ["FLUDARABINA","FLUDARABINA MICROSULES - 10 MG COMP.REC.X 15"],
  ["AZATIOPRINA","IMURAN - 50 MG COMP.X 100"],
  ["AZATIOPRINA","AZATIOPRINA RAFFO - 50 MG COMP.X 100"],
  ["AZATIOPRINA","AZATIOPRINA RONTAG - 50 MG COMP.X 100"],
  ["BUSERELINE","SUPREFACT DEPOT - IMPLANTE BIMENS.+JGA.X 1"],
  ["VINORELBINE","NAVELBINE - 10 MG INY.X 1"],
  ["VINORELBINE","VINOREL - 10 MG INY.F.A.X 1 X 1 ML"],
  ["DEXAMETASONA","DEXAMETASONA 21 FOSFATO RICHET - 8MG/2ML INY.A.X 1 C/JGA."],
  ["DEXAMETASONA","DEXAMETASONA DRAWER - 8 MG INY.A.X 100 X 2 ML"],
  ["DEXAMETASONA","DECADRON AL - 8MG/ML F.A.X1 X 2ML+JGA."],
  ["DEXAMETASONA","RUPEDEX - 8 MG INY.A.X 2 ML"],
  ["DEXAMETASONA","DEXAMETASONA FABRA - 8 MG INY.X 1 + JGA."],
  ["DEXAMETASONA","NEXADRON - 8 MG A.X 100 X 2 ML"],
  ["DEXAMETASONA","FADAMETASONA - 8 MG INY.A.X 25 X 2 ML"],
  ["DOXORUBICINA LIPOSOMAL","DOXOPEG - 20 MG INY.VIAL X 1"],
  ["DOXORUBICINA LIPOSOMAL","DOXPLAX - 20 MG F.A.X 1 X 10 ML"],
  ["DOXORUBICINA LIPOSOMAL","LIBENDE - 20 MG F.A.X 1 X 10 ML"],
  ["EXEMESTANO","AROMASIN - 25 MG COMP.REC.X 30"],
  ["EXEMESTANO","NOXETOL - 25 MG COMP.REC.X 30"],
  ["EXEMESTANO","VAXEMES - 25 MG COMP.REC.X 30"],
  ["CARBOPLATINO","CARBOPLATINO TUTEUR - 50 MG INY.LIOF.F.A.X 1"],
  ["CARBOPLATINO","CARBOPLATINO DELTA FARMA - 50 MG INY.LIOF.F.A.X 1"],
  ["METOTREXATO","ERVEMIN - 2.5 MG COMP.X 20"],
  ["METOTREXATO","ARTRAIT - 2.5 MG COMP.X 20"],
  ["EPIRUBICINA","EPIRUBICINA DELTA FARMA - 10 MG INY.F.A.X 1"],
  ["BICALUTAMIDA","RAFFOLUTIL - 150 MG COMP.REC.X 30"],
  ["BICALUTAMIDA","CASODEX - 150 MG COMP.X 28"],
  ["BICALUTAMIDA","GEPEPROSTIN - 150 MG COMP.REC.X 30"],
  ["METOTREXATO","ARTRAIT - 7.5 MG COMP.RAN.X 10"],
  ["METOTREXATO","ERVEMIN - 7.5 MG COMP.X 10"],
  ["PEMETREXED","ALIMTA - 500 MG F.A.X 1"],
  ["PEMETREXED","TREXAM - 500 MG F.A.X 1"],
  ["PEMETREXED","ENZASTAR - 500 MG LIOF.F.A.X 1"],
  ["PEMETREXED","LIDORAS - 500 MG F.A.LIOF.X 1"],
  ["PEMETREXED","PRAXED - 500 MG F.A.X 1"],
  ["PEMETREXED","TREXTECH - 500 MG INY.F.A.X 1"],
  ["PEMETREXED","PEMETREXED GLENMARK - 500 MG F.A.X 1"],
  ["PEMETREXED","EKEL - 500 MG F.A.LIOF.X 1"],
  ["PEMETREXED","VENUSTED - 500 MG INY.LIOF.X 1"],
  ["PEMETREXED","SUKUBA - 500 MG LIOF.F.A.X 1"],
  ["PEMETREXED","MARTXEL 500 MG 1 FCO.AMP. - 500 MG PVO. LIOF. 1 VIAL"],
  ["PEMETREXED","PEMETREXED VARIFARMA - 500 MG F.A.PVO.LIOF.X 1"],
  ["PEMETREXED","PEMETREXED IMA - 500 MG PVO.LIOF.X 1"],
  ["PEMETREXED","TEPENAC - 500 MG F.A.X 1"],
  ["PEMETREXED","XULIA - 500 MG F.A.X 1"],
  ["PEMETREXED","PAXEQUIME - 500 MG VIAL PVO.LIOF.X 1"],
  ["DEXAMETASONA","DEXAMERAL 40 - 40 MG COMP.X 14"],
  ["DEXAMETASONA","DEXALAF - 40 MG COMP.X 14"],
  ["PAZOPANIB","VORIFAS - 200 MG COMP.REC.X 30"],
  ["PAZOPANIB","KIPANIB - 200 MG COMP.REC.X 30"],
  ["PAZOPANIB","PAZOPATER - 200 MG COMP.REC.X 30"],
  ["PAZOPANIB","AZANIR - 200 MG COMP.REC.X 30"],
  ["PAZOPANIB","BIALKO - 200 MG COMP.REC.X 30"],
  ["PAZOPANIB","MAVERICK - 200 MG COMP.REC.X 30"],
  ["PAZOPANIB","PAZOPANE - 200 MG COMP.REC.X 30"],
  ["PAZOPANIB","PACHTOR - 200 MG COMP.REC.X 30"],
  ["PAZOPANIB","VOZYNIB - 200 MG COMP.REC.X 30"],
  ["PAZOPANIB","VORIFAS - 400 MG COMP.REC.X 30"],
  ["PAZOPANIB","KIPANIB - 400 MG COMP.REC.X 30"],
  ["PAZOPANIB","PAZOPATER - 400 MG COMP.REC.X 30"],
  ["PAZOPANIB","AZANIR - 400 MG COMP.REC.X 30"],
  ["PAZOPANIB","BIALKO - 400 MG COMP.REC.X 30"],
  ["PAZOPANIB","MAVERICK - 400 MG COMP.REC.X 30"],
  ["PAZOPANIB","PAZOPANE - 400 MG COMP.REC.X 30"],
  ["PAZOPANIB","PACHTOR - 400 MG COMP.REC.X 30"],
  ["PAZOPANIB","VOZYNIB - 400 MG COMP.REC.X 30"],
  ["TEMOZOLOMIDA","DRALITEM - 180 MG CÁPS.X 5"],
  ["TEMOZOLOMIDA","TEMODAL - 180 MG CÁPS.X 5"],
  ["TEMOZOLOMIDA","KEMTAX - 180 MG CÁPS.X 5"],
  ["PAMIDRONATO DISÓDICO","AMINOMUX - 30 MG INY.LIOF.F.A.X 1"],
  ["DEXAMETASONA","DEXATOTAL - 8 MG COMP.RAN.X 10"],
  ["DEXAMETASONA","DEXATOTAL - 8 MG COMP.RAN.X 30"],
  ["DEXAMETASONA","DEXALAF - 8 MG COMP.X 10"],
  ["DEXAMETASONA","DEXALAF - 8 MG COMP.X 30"],
  ["FILGRASTIM PEGUILADO","PEG NEUTROPINE PA - 6MG JGA.PRELL.X1+PROT.A."],
  ["LIPEGFILGRASTIM","LONQUEX - JGA.PRELL. X 1 X 0.06 ML"]
].map(([droga, medicamento]) => ({
  financiador: "OSDE Alto Costo",
  droga,
  medicamento,
  auditoria: "No informado"
})));

for (const item of MEDICAMENTOS) {
  if (item.financiador === "OSDE Alto Costo" && [
    "PEG NEUTROPINE PA - 6MG JGA.PRELL.X1+PROT.A.",
    "LONQUEX - JGA.PRELL. X 1 X 0.06 ML"
  ].includes(item.medicamento)) {
    item.auditoria = "Sí";
  }
}

MEDICAMENTOS.push(
  {
    financiador: "OSDE Alto Costo",
    droga: "HIERRO",
    medicamento: "FERINJECT INY",
    auditoria: "AMB No / INT Sí"
  },
  {
    financiador: "OSDE Alto Costo",
    droga: "ERITROPOYETINA",
    medicamento: "-",
    auditoria: "Sí"
  },
  {
    financiador: "OSDE Alto Costo",
    droga: "INMUNOGLOBULINA HUMANA",
    medicamento: "PRIVIGEN 5 GR 50 ML",
    auditoria: "No informado"
  },
  {
    financiador: "OSDE Alto Costo",
    droga: "INMUNOGLOBULINA HUMANA",
    medicamento: "PRIVIGEN 10 GR 100 ML",
    auditoria: "No informado"
  },
  {
    financiador: "OSDE Alto Costo",
    droga: "INMUNOGLOBULINA HUMANA",
    medicamento: "PRIVIGEN 20 GR 200 ML",
    auditoria: "No informado"
  },
  {
    financiador: "OSDE Alto Costo",
    droga: "INMUNOGLOBULINA HUMANA",
    medicamento: "CIELDOM 10 GR 200 ML",
    auditoria: "No informado"
  },
  {
    financiador: "OSDE Alto Costo",
    droga: "INMUNOGLOBULINA HUMANA",
    medicamento: "CIELDOM 5 GR 100 ML",
    auditoria: "No informado"
  }
);

MEDICAMENTOS.push(...[
  ["BEVACIZUMAB", "AVASTIN 400 MG/16 ML AMP"],
  ["CICLOFOSFAMIDA", "CICLOFOSFAMIDA LKM 1GR FA"],
  ["DURVALUMAB", "IMFINZI 500 MG VIAL X 10 ML x 1"],
  ["INMUNOGLOBULINA HUMANA NORMAL", "PRIVIGEN 5 GR FA 50 ML"],
  ["ONDANSETRON", "ONDANSETRON LKM 8 8 MG COMP.X 10"],
  ["RITUXIMAB IV", "RUXIENCE 100 mg/10 ml f.a x 2"]
].map(([droga, medicamento]) => ({
  financiador: "ASE-Medifé",
  droga,
  medicamento,
  auditoria: "No informado"
})));

MEDICAMENTOS.push(...[
  ["ACETATO DE LEUPROLIDE","ELIGARD 22.5 MG KIT"],
  ["ACETATO DE LEUPROLIDE","ELIGARD 45 MG KIT X 1"],
  ["ACETATO DE LEUPROLIDE","LECTRUM 22,5 ML KIT"],
  ["ACETATO DE LEUPROLIDE","LECTRUM 3.75 MG KIT"],
  ["ACETATO DE LEUPROLIDE","LECTRUM 7.5 MG KIT"],
  ["ACIDO ZOLEDRONICO","ACIDO ZOLEDR.MICROSULES 4 MG AMP"],
  ["ABEMACICLIB","VERZENIO 150 MG COMP"],
  ["ADALIMUMAB","AMGEVITA 40MG/0.8ML AUTOINY X 2"],
  ["ADALIMUMAB","HUMIRA AC LAP AUTOINY 0.4ML X 2"],
  ["ADALIMUMAB","HUMIRA AC LAP AUTOINY 0.8ML X 1"],
  ["ALBUMINA HUMANA","INFINITY PHARMA"],
  ["ALFILIBERCEPT","EYLIA 40 mg / ml"],
  ["ANASTROZOL","GONDONAR 1 MG X 1 COMPR"],
  ["ANASTROZOL","ANASTROZOL 1 MG X 1 COMPR KEMEX"],
  ["APREPITANT","EMEND TRIPACK CAPS.X 1+CAPS.X2"],
  ["ATEZOLIZUMAB","TECENTRIQ 1200mg vial x 1 x 20 ml"],
  ["ATEZOLIZUMAB","TECENTRIQ 840 mg vial x 1 x 14 ml"],
  ["AZACITIDINA","AZAMEX 100 mg f.a.x 1"],
  ["AZACITIDINA","AZZA 100 mg iny.liof.f.a.x 1"],
  ["AZACITIDINA","AZACITIDINA LKM 100 MG AMP"],
  ["BACILO DE CALMETTE GUERIN","BCG CULTIVO SSI FCO AMP X 4"],
  ["BACILO DE CALMETTE GUERIN","CARCIVAC FCO AMP"],
  ["BELATACEPT","NULOJIX 250mg/vial pvo.liof.x 1"],
  ["BENDAMUSTINA","BENDAMUSTINA KEMEX 100 MG FAMP"],
  ["BENDAMUSTINA","BENDAMUSTINA MICROSULES 100 MG FAMP"],
  ["BENDAMUSTINA","BENDAMUSTINA MICROSULES 25 MG FAMP"],
  ["BENDAMUSTINA","BENDAMUSTINA BIOPROFARMA 25 MG FAMP"],
  ["BENDAMUSTINA","BENDAMUSTINA VARIFARMA 100 MG FAMP"],
  ["BENDAMUSTINA","BENDAMUSTINA VARIFARMA 25 MG FAMP"],
  ["BEVACIZUMAB","AVASTIN 100 MG/4 ML AMP"],
  ["BEVACIZUMAB","BEVAX 100 mg vial x 1 x 4 ml"],
  ["BEVACIZUMAB","BEVAX 400 mg vial x 1 x 16 ml"],
  ["BEVACIZUMAB","ZIRAVEB 100 mg/4 ml a.x 1"],
  ["BEVACIZUMAB","ZIRAVEB 400 mg/16 ml a.x 1"],
  ["BLEOMICINA","BLEOMICINA SULF IVAX 15 U FCO AMP"],
  ["BLEOMICINA","BLEOMICINA 15 U LKM FCO AMP"],
  ["BORTEZOMIB","BORATER 3.5 mg f.a.x 1"],
  ["BORTEZOMIB","BORTMEX 3.5 MG INY"],
  ["BORTEZOMIB","GYSATY 3.5 mg f.a.x 1"],
  ["BRENTUXIMAB VEDOTIN","ADCETRIS 50 MG FCO AMP"],
  ["BUSULFAN","BUSULFAN 60 mg f.a.x 8 x 10 ml"],
  ["CABAZITAXEl","BLACKXELL 60 MG F/A"],
  ["CABAZITAXEL","CABAZIL FA 1.5ML + DILUY"],
  ["CARBOPLATINO","CARBOPLATINO 150 MG KEMEX F.A"],
  ["CARBOPLATINO","CARBOPLATINO 150 MG MICROSULES F.A"],
  ["CARBOPLATINO","CARBOPLATINO 450 MG TEVA FCO AMP (TUTEUR)"],
  ["CARBOPLATINO","CARBOPLATINO GLENMARK 150 MG INY."],
  ["CARBOPLATINO","CARBOPLATINO GLENMARK 450 MG INY."],
  ["CARBOPLATINO","CARBOPLATINO 150MG TUTEUR LIOF"],
  ["CARBOPLATINO","CARBOPLATINO 450 MG KEMEX F.A"],
  ["CARBOPLATINO","CARBOPLATINO 450 MG MICROSULES F.A"],
  ["CARBOPLATINO","CARBOPLATINO LKM 150 MG"],
  ["CARFILZOMIB","ALCAF 60 MG"],
  ["CARFILZOMIB","CARFIZOL FAMP"],
  ["CARFILZOMIB","FILZOCAR 60 MG TUTEUR"],
  ["CETUXIMAB","ERBITUX X 1 VIAL X 100 ML"],
  ["CETUXIMAB","ERBITUX X 1 VIAL X 20 ML"],
  ["CICLOFOSFAMIDA","CICLOFOSFAMIDA 1 GR FAMP GP PHARM"],
  ["CICLOFOSFAMIDA","CICLOFOSFAMIDA 200 MG FA GPPHARM"],
  ["CICLOFOSFAMIDA","CICLOFOSFAMIDA LKM 1GR FA"],
  ["CICLOFOSFAMIDA","CICLOFOSFAMIDA MICROSULES 1GR"],
  ["CICLOFOSFAMIDA","CICLOFOSFAMIDA MICROSULES 200 MG"],
  ["CISPLATINO","CISPLATINO 10 MG FCO AMP TUTEUR"],
  ["CISPLATINO","CISPLATINO 50 MG FCO AMP TUTEUR"],
  ["CISPLATINO","CISPLATINO 50 MG KEMEX AMP"],
  ["CISPLATINO","CISPLATINO 50 MG MICROSULES AMP"],
  ["CITARABINA","CITARABINA MICROSULES 100 MG FA"],
  ["CITARABINA","CITARABINA MICROSULES 1000 MG FA"],
  ["DACARBAZINA","DACARBAZINA VARIFARMA 200 MG AMP."],
  ["DACARBAZINA","ONCOCARBIL 200 200 MG INY.LIOF.F.A.X 1"],
  ["DARATUMUMAB","DARZALEX 100 MG/5 ML x 1"],
  ["DARATUMUMAB","DARZALEX 400 MG/20 ML x 1"],
  ["DARATUMUMAB","DARZALEX SC 1800 MG/15 ML"],
  ["DECITABINA","SIGNUM 50 ML FCO.AMP x 1"],
  ["DECITABINE","DETAVI 50MG AMP"],
  ["DEGARELIX","FIRMAGON 120MG FA X 2"],
  ["DEGARELIX","FIRMAGON 80MG FA"],
  ["DENOSUMAB","PROLIA 60 MG/ML JGA PRELL"],
  ["DENOSUMAB","XGEVA 70MG/ML INY"],
  ["DOCETAXEL","DOCETAXEL 20 MG KEMEX FAMP"],
  ["DOCETAXEL","DOCETAXEL 20MG AMP MICROSULES"],
  ["DOCETAXEL","DOCETAXEL 80 MG AMP MICROSULES"],
  ["DOCETAXEL","DOCETAXEL 80 MG KEMEX FAMP"],
  ["DOSTARLIMAB","JEMPERLI 50MG x 10 ML"],
  ["DOXORUBICINA","DOXORUBICINA 10 MG MICROSULES AMP"],
  ["DOXORUBICINA","DOXORUBICINA 50 MG MICROSULES AMP"],
  ["DOXORUBICINA","DOXORUBICINA LIPOSOMAL 20 MG INY RAFFO"],
  ["DURVALUMAB","IMFINZI 120 MG VIAL X 2.4 ML x 1"],
  ["DURVALUMAB","IMFINZI 500 MG VIAL X 10 ML x 1"],
  ["EPIRUBICINA","EPIRUBICINA 50 MG IMA INY"],
  ["ERIBULINA MASILATO","ELEFIX VIAL X 1 X 2 ML"],
  ["ERITROPOYECTINA RECOMB.HUMANA","HEMAX 10.000 UI FCO AMP"],
  ["ERITROPOYECTINA RECOMB.HUMANA","HEMAX 40.000 UI FCO AMP"],
  ["ERTAPENEM","INVANZ 1 G"],
  ["ETOPOSIDO","ETOPOSIDO MICROSULES 100 MG INY.A.X 1 X 5 ML"],
  ["FILGRASTIM","FILGEN 300 MCG JGA.PRELL.X 5"],
  ["FILGRASTIM","NEUTROMAX 30 MUI (300 MCG) F.A.X 5"],
  ["FILGRASTIM","NEUTROMAX 48 MUI (480 MCG) AMP X 5"],
  ["FLUOROURACILO","FLUOROURACILO KEMEX 500 MG FCO AMP"],
  ["FLUOROURACILO","FLUOROURACILO MICROSULES 500MG INY"],
  ["FOSAPREPITANT DIMEGLUMINA","EMEND IV VIAL 150 MG"],
  ["GEMCITABINA","GEMCITABINA 1 GR GP PHARM F.AMP"],
  ["GEMCITABINA","GEMCITABINA 1 GR KEMEX F.AMP."],
  ["GEMCITABINA","GEMCITABINA 200 MG GP PHARM F.AMP."],
  ["GEMCITABINA","GEMCITABINA 200 MG KEMEX F.AMP."],
  ["GOSERELIN","ZOLADEX 3.6 MG INY"],
  ["GOSERELIN","ZOLADEX LA 10.8 MG INY"],
  ["HIERRO","FERINJECT INY"],
  ["IFOSFAMIDA","IFOSFAMIDA 1 GR MICROSULES"],
  ["IMATINIB","AGACEL 100 MG COMP x 180"],
  ["IMATINIB","AGACEL 400 MG COMP x 30"],
  ["IMATINIB","GLIVEC 100 MG COMP x 60"],
  ["IMATINIB","TIMAB 100 MG COMP x 180"],
  ["IMATINIB","TIMAB 400 MG COMP x 30"],
  ["INFLIXIMAB","IXIFI 100 MG AMP x 1"],
  ["INFLIXIMAB","REMICADE 100 MG"],
  ["INMUNOGLOBULINA HUMANA NORMAL","CIELDOM 5 GR FA X 100 ML"],
  ["INMUNOGLOBULINA HUMANA NORMAL","PRIVIGEN 10 GR FA 100 ML"],
  ["INMUNOGLOBULINA HUMANA NORMAL","PRIVIGEN 5 GR FA 50 ML"],
  ["IPILIMUMAB","YERVOY 50 mg/10 ml vial x 1"],
  ["IRINOTECAN","IRINOTECAN GLENMARK 100 MG FA"],
  ["IRINOTECAN","IRINOTECAN KEMEX 100 MG FA"],
  ["IRINOTECAN","IRINOTECAN MICROSULES 100 MG FCOAMP"],
  ["ISATUXIMAB","SARCLISA (ISATUXIMAB 100 MG FCO AMP"],
  ["ISATUXIMAB","SARCLISA (ISATUXIMAB 500 MG FCO AMP"],
  ["ISAVUCONAZOL","ISAVUCONAZOL 200 MG FAX 1 CRESEMBA"],
  ["ISAVUCONAZOL","ISAVUCONAZOL 100 MG FAX 2 CRESEMBA"],
  ["LEUCOVORINA","LEUCOCALCIN 15 MG COMP"],
  ["LEUCOVORINA CALCICA","LEUCOVORINA 50 MG TUTEUR AMP"],
  ["LIPEGFILGRASTIM","LONQUEX 6 MG JGA PRELL X 1"],
  ["MELFALANO INYECTABLE IM","MELFALAN FRIMIRT 50 MG IV"],
  ["MEPREDNISONA","DELTISONA B 40 MG COMP.X 20"],
  ["METOTREXATO","METOTREXATO 1000 MG FAMP MICROSULES"],
  ["METOTREXATO","METOTREXATO 50 MG FAMP MICROSULES"],
  ["METOTREXATO","METOTREXATO 500 MG FAMP MICROSULES"],
  ["MITOMICINA","MITOMICINA C 20 MG F AMP MICROSULES"],
  ["NATALIZUMAB","TYSABRI 150 MG/ML JER.PRELL. X 2"],
  ["NATALIZUMAB","TYSABRI 300 mg/15 ml vial x 1"],
  ["NETUPITANT","AKYNZEO"],
  ["NIVOLUMAB","OPDIVIO 100 mg/10 ml vial x 1"],
  ["NIVOLUMAB","OPDIVIO 40 mg/4 ml vial x 1"],
  ["NIVOLUMAB","OPDIVO 240MG/24ML"],
  ["OBINUTUZUMAB","GAZYVA 1000 MG / 40 ML VIAL"],
  ["OCRELIZUMAB","OCREVUS 300 mg/10 ml vial x 1"],
  ["OCTREOTTIDA","SANDOSTATIN LAR 20 MG JGA PRE x 1"],
  ["OCTREOTTIDA","SANDOSTATIN LAR 30 MG JGA PRE x 1"],
  ["OMALIZUMAB","XOLAIR 150 MG FAMP X 1"],
  ["OMALIZUMAB","XOLAIR 150 MG JGA PRELL X 1"],
  ["ONDANSETRON","ONDANSETRON 8 MG CELCTYC AMP"],
  ["ONDANSETRON","ONDANSETRON 8 MG RICHET COMP"],
  ["ONDANSETRON","ONDANSETRON 8 MG GOBBI COMP"],
  ["ONDANSETRON","ONDANSETRON 8 MG MICROSULES COMP"],
  ["ONDANSETRON","ONDANSETRON 8 MG FABRA AMP"],
  ["ONDANSETRON","ONDANSETRON FRESENIUS 8 MG AMPOLLAS"],
  ["ONDANSETRON","ONDANSETRON LKM 8 8 MG COMP.X 10"],
  ["OXALIPLATINO","OXALIPLATINO KEMEX100MG INY"],
  ["OXALIPLATINO","OXALIPLATINO MICROSULES 100MG INY"],
  ["OXALIPLATINO","OXALIPLATINO 50 MG KEMEX INY"],
  ["OXALIPLATINO","OXALIPLATINO MICROSULES 50MG INY"],
  ["PACLITAXEL","PACLITAXEL KEMEX 30 MG"],
  ["PACLITAXEL","PACLITAXEL KEMEX 100 MG"],
  ["PACLITAXEL","PACLITAXEL KEMEX 150 MG"],
  ["PACLITAXEL ALBUMINA","TAYCOVIT A"],
  ["PACLITAXEL + ALBUMINA","ABRAXANE 100MG INY"],
  ["PAMIDRONATO DISODICO","AMINOMUX 30 MG INY.LIOF.F.A.X 1"],
  ["PAMIDRONATO DISODICO","AMINOMUX 90 MG INY.LIOF.F.A.X 1"],
  ["PANITUMUMAB INYECTABLE IV","VECTIBIX 100 MG X 5ML"],
  ["PEGASPARGASA","ONCASPAR PVO.P/SOL.INY.VIAL X 1"],
  ["PEGFILGRASTIM","PEG NEUTROPINE PA 6MG JGA.PRELL.X1+PROT.A."],
  ["PEMBROLIZUMAB","KEYTRUDA ENVASE 100 MG VIAL X 2"],
  ["PEMBROLIZUMAB","PEMBROX ENVASE 100MG VIAL x 2"],
  ["PEMETREXED","PEMETREXED 500 GP FARM"],
  ["PEMETREXED","PEMETREXED 500 KEMEX FCO AMP"],
  ["PEMETREXED","PEMETREXED 500 GP GLENMARK"],
  ["PERTUZUMAB","PERJETA 420 mg/14 ml a.x 1"],
  ["PERTUZUMAB + TRASTUZUMAB SC","PERJETA - HERCEPTIN IV COMBO PACK Kit Inyectable"],
  ["PERTUZUMAB + TRASTUZUMAB SC","PHESGO 1200/600MG VIAL X1 X15ML"],
  ["PERTUZUMAB + TRASTUZUMAB SC","PHESGO 600/600 VIAL X 10 ML"],
  ["PLERIZAFOR","REVIXIL 20 MG X 1"],
  ["RAMUCIRUMAB","CYRAMZA 500 MG 10 MG/ML F.A.X 1 X 50 ML"],
  ["RANIBIZUMAB","LUCENTIS 1VIAL X 0,23 ML"],
  ["RITUXIMAB SC","MABTHERA SC 1400 mg/11.7 ml vial x 1"],
  ["RITUXIMAB IV","NOVEX 100 MG VIAL ENV X 1 AMP"],
  ["RITUXIMAB IV","NOVEX 500 MG VIAL x 1"],
  ["RITUXIMAB IV","RUXIENCE 100 mg/10 ml f.a x 2"],
  ["RITUXIMAB IV","RUXIENCE 500 MG VIAL"],
  ["RITUXIMAB IV","TRUXIMA 100 mg/10 ml f.a x 2"],
  ["RITUXIMAB IV","TRUXIMA 500 mg/50 ml f.a x 1"],
  ["SECUKINUMAB","COSENTYX 150MG / 1ML AUTOINY X 1"],
  ["SECUKINUMAB","COSENTYX 300MG / 2ML AUTOINY X 1"],
  ["SOMATOTROFINA","NORDITROPIN FLEXPRO 15 MG X 1"],
  ["TAMOXIFENO","10MG COMP GADOR"],
  ["TAMOXIFENO","20MG COMP GADOR"],
  ["TIMOGLOBULINA","TIMOGLOBULINA 25 MG FCO AM"],
  ["TOCILIZUMAB","ACTEMRA 200ML – 10366017"],
  ["TOXINA BOTULINICA","TOXINA BOTULINICA (BOTOX) 100UI AMP"],
  ["TRABECTEDINA","YONDELIS 1 MG FCO AMP"],
  ["TRASTUZUMAB DERUXTECAN","ENHERTU"],
  ["TRASTUZUMAB","HERCEPTIN SC 600 mg/5 ml vial x 1"],
  ["TRASTUZUMAB","TRAZIMERA 440 mg f.a. x 1+ solv."],
  ["TRASTUZUMAB","TUZEPTA 440 mg f.a. x 1+ solv."],
  ["TRASTUZUMAB EMTANSINA","KADCYLA 100 MG X 1 VIAL x 1"],
  ["TRASTUZUMAB EMTANSINA","KADCYLA 160 MG X 1 VIAL x 1"],
  ["TRIPTORELINA","DECAPEPTYL RETARD IM 3.75 MG KIT"],
  ["TRIPTORELINA","DECAPEPTYL RETARD IM 11.25 MG KIT"],
  ["USTEKINUMAB","STELARA 90 MG/1 ML VIAL+J.PRELL"],
  ["USTEKINUMAB","STELARA IV 130MG/26ML VIAL"],
  ["VEDOLIZUMAB","ENTYVIO 300 MG VIAL"],
  ["VEDOLIZUMAB","ENTYVIO SC JGA PRELL"],
  ["VINBLASTINA","VINBLASTINA KEMEX 10MG x 1"],
  ["VINCRISTINA","VINCRISTINA KEMEX 1 MG INY.A.X 1"],
  ["VINCRISTINA","VINCRISTINA LKM 1 1 MG INY.A.X 1"],
  ["VINORELBINE","VINORELBINA 50 MG AMP KEMEX"],
  ["VINORELBINE","VINORELBINE 10 MG FCO AMP VINOREL"]
].map(([droga, medicamento]) => ({
  financiador: "Swiss Medical",
  droga,
  medicamento,
  auditoria: "No informado"
})));

MEDICAMENTOS.push(...[
  ["ACETATO DE LEUPROLIDE","ELIGARD 22.5 MG KIT"],
  ["ACETATO DE LEUPROLIDE","LECTRUM 7.5 MG KIT"],
  ["ACETATO DE LEUPROLIDE","LECTRUM 3.75 MG KIT"],
  ["ACETATO DE LEUPROLIDE","LECTRUM 22,5 ML KIT"],
  ["ACETATO DE LEUPROLIDE","ELIGARD 45 MG KIT X 1"],
  ["ACIDO ZOLEDRONICO","ACIDO ZOLEDR.MICROSULES 4 MG AMP"],
  ["ADALIMUMAB","HUMIRA AC LAP AUTOINY 0.4ML X 2"],
  ["ADALIMUMAB","HUMIRA AC LAP AUTOINY 0.8ML X 1"],
  ["ADALIMUMAB","AMGEVITA 40MG/0.8ML AUTOINY X 2"],
  ["ANFOTERICINA B LIPOSOMAL","AMBISONE 50 MG FCO AMP"],
  ["ANIDULAFUNGINA","ANIDULAFUNGINA ECALTA 100 MG FC"],
  ["APREPITANT","EMEND TRIPACK CAPS.X 1+CAPS.X2"],
  ["ATEZOLIZUMAB","TECENTRIQ 1200mg vial x 1 x 20 ml"],
  ["ATEZOLIZUMAB","TECENTRIQ 840 mg vial x 1 x 14 ml"],
  ["AZACITIDINA","AZZA 100 mg iny.liof.f.a.x 1"],
  ["AZACITIDINA","AZAMEX 100 mg f.a.x 1"],
  ["AZACITIDINA","AZACITIDINA LKM 100 MG AMP"],
  ["BACILO DE CALMETTE GUERIN","BCG CULTIVO SSI FCO AMP X 4"],
  ["BACILO DE CALMETTE GUERIN","CARCIVAC FCO AMP"],
  ["BELATACEPT","NULOJIX 250mg/vial pvo.liof.x 1"],
  ["BENDAMUSTINA","BENDAMUSTINA VARIFARMA 100 MG FAMP"],
  ["BENDAMUSTINA","BENDAMUSTINA VARIFARMA 25 MG FAMP"],
  ["BENDAMUSTINA","BENDAMUSTINA MICROSULES 25 MG FAMP"],
  ["BENDAMUSTINA","BENDAMUSTINA MICROSULES 100 MG FAMP"],
  ["BENDAMUSTINA","BENDAMUSTINA KEMEX 100 MG FAMP"],
  ["BEVACIZUMAB","AVASTIN 400 MG/16 ML AMP"],
  ["BEVACIZUMAB","AVASTIN 100 MG/4 ML AMP"],
  ["BEVACIZUMAB","BEVAX 100 mg vial x 1 x 4 ml"],
  ["BEVACIZUMAB","BEVAX 400 mg vial x 1 x 16 ml"],
  ["BLEOMICINA","BLEOMICINA SULF IVAX 15 U FCO AMP"],
  ["BORTEZOMIB","BORATER 3.5 mg f.a.x 1"],
  ["BORTEZOMIB","GYSATY 3.5 mg f.a.x 1"],
  ["BORTEZOMIB","BORTMEX 3.5 MG INY"],
  ["BRENTUXIMAB VEDOTIN","ADCETRIS 50 MG FCO AMP"],
  ["BUSULFAN","BUSULFAN 60 mg f.a.x 8 x 10 ml"],
  ["CABAZITAXEL","CABAZIL FA 1.5ML + DILUY"],
  ["CABAZITAXEl","BLACKXELL 60 MG F/A"],
  ["CARBOPLATINO","CARBOPLATINO 150 MG MICROSULES F.A"],
  ["CARBOPLATINO","CARBOPLATINO 150 MG KEMEX F.A"],
  ["CARBOPLATINO","CARBOPLATINO GLENMARK 150 MG INY."],
  ["CARBOPLATINO","CARBOPLATINO GLENMARK 450 MG INY."],
  ["CARBOPLATINO","CARBOPLATINO 150MG TUTEUR LIOF"],
  ["CARBOPLATINO","CARBOPLATINO LKM 150 MG"],
  ["CARBOPLATINO","CARBOPLATINO 450 MG MICROSULES F.A"],
  ["CARBOPLATINO","CARBOPLATINO 450 MG KEMEX F.A"],
  ["CARFILZOMIB","CARFIZOL FAMP"],
  ["CARFILZOMIB","FILZOCAR 60 MG TUTEUR"],
  ["CARFILZOMIB","ALCAF 60 MG"],
  ["CETUXIMAB","ERBITUX X 1 VIAL X 20 ML"],
  ["CETUXIMAB","ERBITUX X 1 VIAL X 100 ML"],
  ["CICLOFOSFAMIDA","CICLOFOSFAMIDA LKM 1GR FA"],
  ["CICLOFOSFAMIDA","CICLOFOSFAMIDA 200 MG FA GPPHARM"],
  ["CICLOFOSFAMIDA","CICLOFOSFAMIDA 1 GR FAMP GP PHARM"],
  ["CICLOFOSFAMIDA","CICLOFOSFAMIDA MICROSULES 1GR"],
  ["CICLOFOSFAMIDA","CICLOFOSFAMIDA MICROSULES 200 MG"],
  ["CISPLATINO","CISPLATINO 50 MG MICROSULES AMP"],
  ["CISPLATINO","CISPLATINO 50 MG KEMEX AMP"],
  ["CISPLATINO","CISPLATINO 10 MG FCO AMP TUTEUR"],
  ["CISPLATINO","CISPLATINO 50 MG FCO AMP TUTEUR"],
  ["CITARABINA","CITARABINA MICROSULES 1000 MG FA"],
  ["CITARABINA","CITARABINA MICROSULES 100 MG FA"],
  ["DACARBAZINA","ONCOCARBIL 200 200 MG INY.LIOF.F.A.X 1"],
  ["DACARBAZINA","DACARBAZINA VARIFARMA 200 MG AMP."],
  ["DARATUMUMAB","DARZALEX 100 MG/5 ML x 1"],
  ["DARATUMUMAB","DARZALEX 400 MG/20 ML x 1"],
  ["DARATUMUMAB","DARZALEX SC 1800 MG/15 ML"],
  ["DECITABINA","SIGNUM 50 ML FCO.AMP x 1"],
  ["DECITABINE","DETAVI 50MG AMP"],
  ["DEGARELIX","FIRMAGON 80MG FA"],
  ["DEGARELIX","FIRMAGON 120MG FA X 2"],
  ["DENOSUMAB","PROLIA 60 MG/ML JGA PRELL"],
  ["DENOSUMAB","XGEVA 70MG/ML INY"],
  ["DOCETAXEL","DOCETAXEL 20 MG KEMEX FAMP"],
  ["DOCETAXEL","DOCETAXEL 80 MG KEMEX FAMP"],
  ["DOCETAXEL","DOCETAXEL 20MG AMP MICROSULES"],
  ["DOCETAXEL","DOCETAXEL 80 MG AMP MICROSULES"],
  ["DOSTARLIMAB","JEMPERLI 50MG x 10 ML"],
  ["DOXORUBICINA","DOXORUBICINA 50 MG MICROSULES AMP"],
  ["DOXORUBICINA","DOXORUBICINA LIPOSOMAL 20 MG INY RAFFO"],
  ["DOXORUBICINA","DOXORUBICINA 10 MG MICROSULES AMP"],
  ["DURVALUMAB","IMFINZI 500 MG VIAL X 10 ML x 1"],
  ["DURVALUMAB","IMFINZI 120 MG VIAL X 2.4 ML x 1"],
  ["EPIRUBICINA","EPIRUBICINA 50 MG IMA INY"],
  ["ERIBULINA MASILATO","ELEFIX VIAL X 1 X 2 ML"],
  ["ERITROPOYECTINA RECOMB.HUMANA","HEMAX 10.000 UI FCO AMP"],
  ["ETOPOSIDO","ETOPOSIDO MICROSULES 100 MG INY.A.X 1 X 5 ML"],
  ["FILGRASTIM","NEUTROMAX 30 MUI (300 MCG) F.A.X 5"],
  ["FILGRASTIM","NEUTROMAX 48 MUI (480 MCG) AMP X 5"],
  ["FILGRASTIM","FILGEN 300 MCG JGA.PRELL.X 5"],
  ["FLUOROURACILO","FLUOROURACILO KEMEX 500 MG FCO AMP"],
  ["FLUOROURACILO","FLUOROURACILO MICROSULES 500MG INY"],
  ["FOSAPREPITANT DIMEGLUMINA","EMEND IV VIAL 150 MG"],
  ["GEMCITABINA","GEMCITABINA 200 MG KEMEX F.AMP."],
  ["GEMCITABINA","GEMCITABINA 200 MG GP PHARM F.AMP."],
  ["GEMCITABINA","GEMCITABINA 1 GR GP PHARM F.AMP"],
  ["GOSERELIN","ZOLADEX 3.6 MG INY"],
  ["GOSERELIN","ZOLADEX LA 10.8 MG INY"],
  ["HEMODERIVADOS","ALBUMINA HUMANA 20% INFINITY P"],
  ["HIERRO","FERINJECT INY"],
  ["IFOSFAMIDA","IFOSFAMIDA 1 GR MICROSULES"],
  ["IMATINIB","AGACEL 400 MG COMP x 30"],
  ["IMATINIB","AGACEL 100 MG COMP x 180"],
  ["IMATINIB","TIMAB 400 MG COMP x 30"],
  ["INFLIXIMAB","IXIFI 100 MG AMP x 1"],
  ["INMUNOGLOBULINA G 10% SOL.","PRIVIGEN 5 GR FA 50 ML"],
  ["IPILIMUMAB","YERVOY 50 mg/10 ml vial x 1"],
  ["IRINOTECAN","IRINOTECAN KEMEX 100 MG FA"],
  ["IRINOTECAN","IRINOTECAN MICROSULES 100 MG FCOAMP"],
  ["IRINOTECAN","IRINOTECAN GLENMARK 100 MG FA"],
  ["ISATUXIMAB","SARCLISA (ISATUXIMAB 100 MG FCO AMP"],
  ["ISATUXIMAB","SARCLISA (ISATUXIMAB 500 MG FCO AMP"],
  ["ISAVUCONAZOL","CRESEMBA 100 MG CAPS"],
  ["ISAVUCONAZOL 200 MG LIOFILIZADO","CRESEMBA 200 MG F.A"],
  ["LETERMOVIR","PREVYMIS 240 MG COMP X 28"],
  ["LEUCOVORINA","LEUCOCALCIN 15 MG COMP"],
  ["LEUCOVORINA CALCICA","LEUCOVORINA 50 MG TUTEUR AMP"],
  ["LIPEGFILGRASTIM","LONQUEX 6 MG JGA PRELL X 1"],
  ["MELFALANO INYECTABLE IM","MELFALAN FRIMIRT 50 MG IV"],
  ["MEPREDNISONA","DELTISONA B 40 MG COMP.X 20"],
  ["METOTREXATO","METOTREXATO 1000 MG FAMP MICROSULES"],
  ["METOTREXATO","METOTREXATO 500 MG FAMP MICROSULES"],
  ["METOTREXATO","METOTREXATO 50 MG FAMP MICROSULES"],
  ["MITOMICINA","MITOMICINA C 20 MG F AMP MICROSULES"],
  ["NATALIZUMAB","TYSABRI 300 mg/15 ml vial x 1"],
  ["NATALIZUMAB","TYSABRI 150 MG/ML JER.PRELL. X 2"],
  ["NETUPITANT","AKYNZEO"],
  ["NIVOLUMAB","OPDIVIO 40 mg/4 ml vial x 1"],
  ["NIVOLUMAB","OPDIVIO 100 mg/10 ml vial x 1"],
  ["NIVOLUMAB","OPDIVO 240MG/24ML"],
  ["OBINUTUZUMAB","GAZYVA 1000 MG / 40 ML VIAL"],
  ["OCRELIZUMAB","OCREVUS 300 mg/10 ml vial x 1"],
  ["OCTREOTTIDA","SANDOSTATIN LAR 30 MG JGA PRE x 1"],
  ["OCTREOTTIDA","SANDOSTATIN LAR 20 MG JGA PRE x 1"],
  ["OMALIZUMAB","XOLAIR 150 MG FAMP X 1"],
  ["OMALIZUMAB","XOLAIR 150 MG JGA PRELL X 1"],
  ["ONDANSETRON","ONDANSETRON LKM 8 8 MG COMP.X 10"],
  ["ONDANSETRON","ONDANSETRON FRESENIUS 8 MG AMPOLLAS"],
  ["OXALIPLATINO","OXALIPLATINO KEMEX100MG INY"],
  ["OXALIPLATINO","OXALIPLATINO MICROSULES 100MG INY"],
  ["OXALIPLATINO","OXALIPLATINO 50 MG KEMEX INY"],
  ["OXALIPLATINO","OXALIPLATINO MICROSULES 50MG INY"],
  ["PACLITAXEL","PACLITAXEL KEMEX 30 MG"],
  ["PACLITAXEL","PACLITAXEL KEMEX 150 MG"],
  ["PACLITAXEL","PACLITAXEL KEMEX 100 MG"],
  ["PACLITAXEL ALBUMINA","TAYCOVIT A"],
  ["PACLITAXEL + ALBUMINA","ABRAXANE 100MG INY"],
  ["PAMIDRONATO DISODICO","AMINOMUX 90 MG INY.LIOF.F.A.X 1"],
  ["PAMIDRONATO DISODICO","AMINOMUX 30 MG INY.LIOF.F.A.X 1"],
  ["PANITUMUMAB INYECTABLE IV","VECTIBIX 100 MG X 5ML"],
  ["PEGASPARGASA","ONCASPAR PVO.P/SOL.INY.VIAL X 1"],
  ["PEGFILGRASTIM","PEG NEUTROPINE PA 6MG JGA.PRELL.X1+PROT.A."],
  ["PEMBROLIZUMAB","KEYTRUDA ENVASE 100 MG VIAL X 2"],
  ["PEMETREXED","PEMETREXED 500 KEMEX FCO AMP"],
  ["PEMETREXED","PEMETREXED 500 GP FARM"],
  ["PERTUZUMAB","PERJETA 420 mg/14 ml a.x 1"],
  ["PERTUZUMAB + TRASTUZUMAB SC","PERJETA - HERCEPTIN IV COMBO PACK Kit Inyectable"],
  ["PERTUZUMAB + TRASTUZUMAB SC","PHESGO 600/600 VIAL X 10 ML"],
  ["PERTUZUMAB + TRASTUZUMAB SC","PHESGO 1200/600MG VIAL X1 X15ML"],
  ["PLERIZAFOR","REVIXIL 20 MG X 1"],
  ["PROTROMPLEX","PROTROMPLEX TOTAL TIM 4 X 600"],
  ["RAMUCIRUMAB","CYRAMZA 500 MG 10 MG/ML F.A.X 1 X 50 ML"],
  ["RITUXIMAB SC","MABTHERA SC 1400 mg/11.7 ml vial x 1"],
  ["RITUXIMAB IV","NOVEX 500 MG VIAL x 1"],
  ["RITUXIMAB IV","RUXIENCE 100 mg/10 ml f.a x 2"],
  ["RITUXIMAB IV","RUXIENCE 500 MG VIAL"],
  ["RITUXIMAB IV","NOVEX 100 MG VIAL ENV X 1 AMP"],
  ["RITUXIMAB IV","TRUXIMA 100 mg/10 ml f.a x 2"],
  ["RITUXIMAB IV","TRUXIMA 500 mg/50 ml f.a x 1"],
  ["SECUKINUMAB","COSENTYX 150MG / 1ML AUTOINY X 1"],
  ["SECUKINUMAB","COSENTYX 300MG / 2ML AUTOINY X 1"],
  ["SOMATOTROFINA","NORDITROPIN FLEXPRO 15 MG X 1"],
  ["TACROLIMUS","PROGRAF 5 MG INY"],
  ["TIMOGLOBULINA 25 MG FCO AM","TIMOGLOBULINA 25 MG FCO AM"],
  ["TIMOGLOBULINA 25 MG FCO AMP","TIMOGLOBULINA 25 MG FCO AMP"],
  ["TOCILIZUMAB 200 MG","ACTEMRA 2OOMG/1OMt FAMP X 1"],
  ["TOXINA BOTULINICA","TOXINA BOTULINICA (BOTOX) 100UI AMP"],
  ["TRABECTEDINA","YONDELIS 1 MG FCO AMP"],
  ["TRASTUZUMAB","HERCEPTIN 440 MG X 50 ML AMP"],
  ["TRASTUZUMAB","HERCEPTIN SC 600 mg/5 ml vial x 1"],
  ["TRASTUZUMAB","TUZEPTA 440 mg f.a. x 1+ solv."],
  ["TRASTUZUMAB","TRAZIMERA 440 mg f.a. x 1+ solv."],
  ["TRASTUZUMAB EMTANSINA","KADCYLA 100 MG X 1 VIAL x 1"],
  ["TRASTUZUMAB EMTANSINA","KADCYLA 160 MG X 1 VIAL x 1"],
  ["TRIPTORELINA","DECAPEPTYL RETARD IM 3.75 MG KIT"],
  ["TRIPTORELINA","DECAPEPTYL RETARD IM 11.25 MG KIT"],
  ["USTEKINUMAB","STELARA 90 MG/1 ML VIAL+J.PRELL"],
  ["USTEKINUMAB","STELARA IV 130MG/26ML VIAL"],
  ["VEDOLIZUMAB","ENTYVIO 300 MG VIAL"],
  ["VEDOLIZUMAB","ENTYVIO SC JGA PRELL"],
  ["VINBLASTINA","VINBLASTINA KEMEX 10MG x 1"],
  ["VINCRISTINA","VINCRISTINA LKM 1 1 MG INY.A.X 1"],
  ["VINCRISTINA","VINCRISTINA KEMEX 1 MG INY.A.X 1"],
  ["VINORELBINE","VINORELBINE 10 MG FCO AMP VINOREL"],
  ["ZAVICEFTA","ZAVICEFTA 2G / 0.5 FCO AMP"]
].map(([droga, medicamento]) => ({
  financiador: "SEMPRE",
  droga,
  medicamento,
  auditoria: "No informado"
})));

MEDICAMENTOS.push(...[
  ["ACETATO DE LEUPROLIDE","LECTRUM 3.75 MG KIT"],
  ["ACETATO DE LEUPROLIDE","ELIGARD 45 MG KIT X 1"],
  ["ACETATO DE LEUPROLIDE","ELIGARD 22.5 MG KIT"],
  ["ADALIMUMAB","AMGEVITA 40MG/0.8ML AUTOINY X 2"],
  ["APREPITANT","EMEND TRIPACK CAPS.X 1+CAPS.X2"],
  ["ATEZOLIZUMAB","TECENTRIQ 1200mg vial x 1 x 20 ml"],
  ["AZACITIDINA","AZZA 100 mg iny.liof.f.a.x 1"],
  ["AZACITIDINA","AZAMEX 100 mg f.a.x 1"],
  ["AZACITIDINA","AZACITIDINA LKM 100 MG AMP"],
  ["BACILO DE CALMETTE GUERIN","CARCIVAC FCO AMP"],
  ["BACILO DE CALMETTE GUERIN","BCG CULTIVO SSI FCO AMP X 4"],
  ["BELATACEPT","NULOJIX 250mg/vial pvo.liof.x 1"],
  ["BENDAMUSTINA","BENDAMUSTINA KEMEX 100 MG FAMP"],
  ["BENDAMUSTINA","BENDAMUSTINA MICROSULES 100 MG FAMP"],
  ["BENDAMUSTINA","BENDAMUSTINA BIOPROFARMA 25 MG FAMP"],
  ["BEVACIZUMAB","AVASTIN 100 MG/4 ML AMP"],
  ["BLEOMICINA","BLEOMICINA 15 U LKM FCO AMP"],
  ["BORTEZOMIB","GYSATY 3.5 mg f.a.x 1"],
  ["BORTEZOMIB","BORTMEX 3.5 MG INY"],
  ["BRENTUXIMAB VEDOTIN","ADCETRIS 50 MG FCO AMP"],
  ["BUSULFAN","BUSULFAN 60 mg f.a.x 8 x 10 ml"],
  ["CABAZITAXEL","BLACKXELL 60 MG F/A"],
  ["CABAZITAXEL","CABAZIL FA 1.5ML + DILUY"],
  ["CARBOPLATINO","CARBOPLATINO 150 MG KEMEX F.A"],
  ["CARBOPLATINO","CARBOPLATINO 150 MG MICROSULES F.A"],
  ["CARBOPLATINO","CARBOPLATINO 450 MG TEVA FCO AMP (TUTEUR)"],
  ["CARBOPLATINO","CARBOPLATINO GLENMARK 150 MG INY."],
  ["CARBOPLATINO","CARBOPLATINO GLENMARK 450 MG INY."],
  ["CARBOPLATINO","CARBOPLATINO LKM 150 MG"],
  ["CARBOPLATINO","CARBOPLATINO 150MG TUTEUR LIOF"],
  ["CARBOPLATINO","CARBOPLATINO 450 MG MICROSULES F.A"],
  ["CARBOPLATINO","CARBOPLATINO 450 MG KEMEX F.A"],
  ["CARFILZOMIB","ALCAF 60 MG"],
  ["CARFILZOMIB","FILZOCAR 60 MG TUTEUR"],
  ["CARFILZOMIB","CARFIZOL FAMP"],
  ["CETUXIMAB","ERBITUX X 1 VIAL X 100 ML"],
  ["CETUXIMAB","ERBITUX X 1 VIAL X 20 ML"],
  ["CICLOFOSFAMIDA","CICLOFOSFAMIDA MICROSULES 1GR"],
  ["CICLOFOSFAMIDA","CICLOFOSFAMIDA LKM 1GR FA"],
  ["CICLOFOSFAMIDA","CICLOFOSFAMIDA MICROSULES 200 MG"],
  ["CICLOFOSFAMIDA","CICLOFOSFAMIDA 1 GR FAMP GP PHARM"],
  ["CICLOFOSFAMIDA","CICLOFOSFAMIDA 200 MG FA GPPHARM"],
  ["CISPLATINO","CISPLATINO 50 MG MICROSULES AMP"],
  ["CISPLATINO","CISPLATINO 50 MG KEMEX AMP"],
  ["CISPLATINO","CISPLATINO 50 MG FCO AMP TUTEUR"],
  ["CISPLATINO","CISPLATINO 10 MG FCO AMP TUTEUR"],
  ["CITARABINA","CITARABINA MICROSULES 100 MG FA"],
  ["CITARABINA","CITARABINA MICROSULES 1000 MG FA"],
  ["DACARBAZINA","ONCOCARBIL 200 200 MG INY.LIOF.F.A.X 1"],
  ["DACARBAZINA","DACARBAZINA VARIFARMA 200 MG AMP."],
  ["DARATUMUMAB","DARZALEX SC 1800 MG/15 ML"],
  ["DARATUMUMAB","DARZALEX 100 MG/5 ML x 1"],
  ["DARATUMUMAB","DARZALEX 400 MG/20 ML x 1"],
  ["DECITABINA","SIGNUM 50 ML FCO.AMP x 1"],
  ["DECITABINE","DETAVI 50MG AMP"],
  ["DEGARELIX","FIRMAGON 120MG FA X 2"],
  ["DEGARELIX","FIRMAGON 80MG FA"],
  ["DENOSUMAB","PROLIA 60 MG/ML JGA PRELL"],
  ["DENOSUMAB","XGEVA 70MG/ML INY"],
  ["DOCETAXEL","DOCETAXEL 80 MG AMP MICROSULES"],
  ["DOCETAXEL","DOCETAXEL 20MG AMP MICROSULES"],
  ["DOCETAXEL","DOCETAXEL 80 MG KEMEX FAMP"],
  ["DOCETAXEL","DOCETAXEL 20 MG KEMEX FAMP"],
  ["DOSTARLIMAB","JEMPERLI 50MG x 10 ML"],
  ["DOXORUBICINA","DOXORUBICINA LIPOSOMAL 20 MG INY RAFFO"],
  ["DOXORUBICINA","DOXORUBICINA 10 MG MICROSULES AMP"],
  ["DOXORUBICINA","DOXORUBICINA 50 MG MICROSULES AMP"],
  ["DURVALUMAB","IMFINZI 120 MG VIAL X 2.4 ML x 1"],
  ["DURVALUMAB","IMFINZI 500 MG VIAL X 10 ML x 1"],
  ["EPIRUBICINA","EPIRUBICINA 50 MG IMA INY"],
  ["ERIBULINA MASILATO","ELEFIX VIAL X 1 X 2 ML"],
  ["ERITROPOYECTINA RECOMB.HUMANA","HEMAX 10.000 UI FCO AMP"],
  ["ETOPOSIDO","ETOPOSIDO MICROSULES 100 MG INY.A.X 1 X 5 ML"],
  ["FILGRASTIM","FILGEN 300 MCG JGA.PRELL.X 5"],
  ["FILGRASTIM","NEUTROMAX 30 MUI (300 MCG) F.A.X 5"],
  ["FILGRASTIM","NEUTROMAX 48 MUI (480 MCG) AMP X 5"],
  ["FLUOROURACILO","FLUOROURACILO MICROSULES 500MG INY"],
  ["FOSAPREPITANT DIMEGLUMINA","EMEND IV VIAL 150 MG"],
  ["GEMCITABINA","GEMCITABINA 1 GR KEMEX F.AMP."],
  ["GEMCITABINA","GEMCITABINA 200 MG KEMEX F.AMP."],
  ["GOSERELIN","ZOLADEX 3.6 MG INY"],
  ["GOSERELIN","ZOLADEX LA 10.8 MG INY"],
  ["HIERRO","FERINJECT INY"],
  ["IFOSFAMIDA","IFOSFAMIDA 1 GR MICROSULES"],
  ["IMATINIB","AGACEL 100 MG COMP x 180"],
  ["IMATINIB","AGACEL 400 MG COMP x 30"],
  ["IMATINIB","GLIVEC 100 MG COMP x 60"],
  ["IMATINIB","TIMAB 100 MG COMP x 180"],
  ["IMATINIB","TIMAB 400 MG COMP x 30"],
  ["INFLIXIMAB","IXIFI 100 MG AMP x 1"],
  ["IPILIMUMAB","YERVOY 50 mg/10 ml vial x 1"],
  ["IRINOTECAN","IRINOTECAN MICROSULES 100 MG FCOAMP"],
  ["IRINOTECAN","IRINOTECAN KEMEX 100 MG FA"],
  ["ISATUXIMAB","SARCLISA (ISATUXIMAB 100 MG FCO AMP"],
  ["ISATUXIMAB","SARCLISA (ISATUXIMAB 500 MG FCO AMP"],
  ["LEUCOVORINA CALCICA","LEUCOVORINA 50 MG TUTEUR AMP"],
  ["LEUCOVORINA","LEUCOVORINA 50 MG MICROSULES"],
  ["LIPEGFILGRASTIM","LONQUEX 6 MG JGA PRELL X 1"],
  ["MELFALANO INYECTABLE IM","MELFALAN FRIMIRT 50 MG IV"],
  ["METOTREXATO","METOTREXATO 1000 MG FAMP MICROSULES"],
  ["METOTREXATO","METOTREXATO 50 MG FAMP MICROSULES"],
  ["METOTREXATO","METOTREXATO 500 MG FAMP MICROSULES"],
  ["MITOMICINA","MITOMICINA C 20 MG F AMP MICROSULES"],
  ["NATALIZUMAB","TYSABRI 150 MG/ML JER.PRELL. X 2"],
  ["NATALIZUMAB","TYSABRI 300 mg/15 ml vial x 1"],
  ["NETUPITANT","AKYNZEO"],
  ["NIVOLUMAB","OPDIVIO 100 mg/10 ml vial x 1"],
  ["NIVOLUMAB","OPDIVIO 40 mg/4 ml vial x 1"],
  ["NIVOLUMAB","OPDIVO 240MG/24ML"],
  ["OBINUTUZUMAB","GAZYVA 1000 MG / 40 ML VIAL"],
  ["OCRELIZUMAB","OCREVUS 300 mg/10 ml vial x 1"],
  ["OCTREOTTIDA","SANDOSTATIN LAR 20 MG JGA PRE x 1"],
  ["OCTREOTTIDA","SANDOSTATIN LAR 30 MG JGA PRE x 1"],
  ["OMALIZUMAB","XOLAIR 150 MG FAMP X 1"],
  ["OMALIZUMAB","XOLAIR 150 MG JGA PRELL X 1"],
  ["ONDANSETRON","ONDANSETRON 8 MG CELCTYC AMP"],
  ["ONDANSETRON","ONDANSETRON 8 MG RICHET COMP"],
  ["ONDANSETRON","ONDANSETRON 8 MG GOBBI COMP"],
  ["ONDANSETRON","ONDANSETRON 8 MG MICROSULES COMP"],
  ["ONDANSETRON","ONDANSETRON LKM 8 8 MG COMP.X 10"],
  ["ONDANSETRON","ONDANSETRON 8 MG FABRA AMP"],
  ["OXALIPLATINO","OXALIPLATINO MICROSULES 100MG INY"],
  ["OXALIPLATINO","OXALIPLATINO 50 MG KEMEX INY"],
  ["OXALIPLATINO","OXALIPLATINO MICROSULES 50MG INY"],
  ["PACLITAXEL","PACLITAXEL KEMEX 30 MG"],
  ["PACLITAXEL","PACLITAXEL KEMEX 100 MG"],
  ["PACLITAXEL","PACLITAXEL KEMEX 150 MG"],
  ["PACLITAXEL ALBUMINA","TAYCOVIT A"],
  ["PACLITAXEL + ALBUMINA","ABRAXANE 100MG INY"],
  ["PAMIDRONATO DISODICO","AMINOMUX 30 MG INY.LIOF.F.A.X 1"],
  ["PAMIDRONATO DISODICO","AMINOMUX 90 MG INY.LIOF.F.A.X 1"],
  ["PANITUMUMAB INYECTABLE IV","VECTIBIX 100 MG X 5ML"],
  ["PEGASPARGASA","ONCASPAR PVO.P/SOL.INY.VIAL X 1"],
  ["PEGFILGRASTIM","PEG NEUTROPINE PA 6MG JGA.PRELL.X1+PROT.A."],
  ["PEMETREXED","PEMETREXED 500 GP FARM"],
  ["PEMETREXED","PEMETREXED 500 GP GLENMARK"],
  ["PEMETREXED","PEMETREXED 500 KEMEX FCO AMP"],
  ["PERTUZUMAB","PERJETA 420 mg/14 ml a.x 1"],
  ["PERTUZUMAB + TRASTUZUMAB SC","PHESGO 1200/600MG VIAL X1 X15ML"],
  ["PERTUZUMAB + TRASTUZUMAB SC","PHESGO 600/600 VIAL X 10 ML"],
  ["RAMUCIRUMAB","CYRAMZA 500 MG 10 MG/ML F.A.X 1 X 50 ML"],
  ["RITUXIMAB SC","MABTHERA SC 1400 mg/11.7 ml vial x 1"],
  ["SECUKINUMAB","COSENTYX 150MG / 1ML AUTOINY X 1"],
  ["SECUKINUMAB","COSENTYX 300MG / 2ML AUTOINY X 1"],
  ["TOXINA BOTULINICA","TOXINA BOTULINICA (BOTOX) 100UI AMP"],
  ["TRABECTEDINA","YONDELIS 1 MG FCO AMP"],
  ["TRASTUZUMAB","HERCEPTIN SC 600 mg/5 ml vial x 1"],
  ["TRASTUZUMAB","TRAZIMERA 440 mg f.a. x 1+ solv."],
  ["TRASTUZUMAB EMTANSINA","KADCYLA 100 MG X 1 VIAL x 1"],
  ["TRASTUZUMAB EMTANSINA","KADCYLA 160 MG X 1 VIAL x 1"],
  ["TRIPTORELINA","DECAPEPTYL RETARD IM 3.75 MG KIT"],
  ["TRIPTORELINA","DECAPEPTYL RETARD IM 11.25 MG KIT"],
  ["USTEKINUMAB","STELARA 90 MG/1 ML VIAL+J.PRELL"],
  ["USTEKINUMAB","STELARA IV 130MG/26ML VIAL"],
  ["VINBLASTINA","VINBLASTINA KEMEX 10MG x 1"],
  ["VINCRISTINA","VINCRISTINA KEMEX 1 MG INY.A.X 1"],
  ["VINORELBINE","VINOREL 10 MG FCO AMP"]
].map(([droga, medicamento]) => ({
  financiador: "Caja Notarial",
  droga,
  medicamento,
  auditoria: "No informado"
})));

MEDICAMENTOS.push(...[
  ["ACETATO DE LEUPROLIDE","ELIGARD 22.5 MG KIT"],
  ["ACETATO DE LEUPROLIDE","ELIGARD 45 MG KIT X 1"],
  ["ACETATO DE LEUPROLIDE","LECTRUM 22,5 ML KIT"],
  ["ACETATO DE LEUPROLIDE","LECTRUM 3.75 MG KIT"],
  ["ACETATO DE LEUPROLIDE","LECTRUM 7.5 MG KIT"],
  ["ACIDO ZOLEDRONICO","ACIDO ZOLEDR.MICROSULES 4 MG AMP"],
  ["ADALIMUMAB","AMGEVITA 40MG/0.8ML AUTOINY X 2"],
  ["ADALIMUMAB","HUMIRA AC LAP AUTOINY 0.4ML X 2"],
  ["ADALIMUMAB","HUMIRA AC LAP AUTOINY 0.8ML X 1"],
  ["APREPITANT","EMEND TRIPACK CAPS.X 1+CAPS.X2"],
  ["ATEZOLIZUMAB","TECENTRIQ 1200mg vial x 1 x 20 ml"],
  ["ATEZOLIZUMAB","TECENTRIQ 840 mg vial x 1 x 14 ml"],
  ["AZACITIDINA","AZAMEX 100 mg f.a.x 1"],
  ["AZACITIDINA","AZZA 100 mg iny.liof.f.a.x 1"],
  ["AZACITIDINA","AZACITIDINA LKM 100 MG AMP"],
  ["BACILO DE CALMETTE GUERIN","BCG CULTIVO SSI FCO AMP X 4"],
  ["BACILO DE CALMETTE GUERIN","CARCIVAC FCO AMP"],
  ["BELATACEPT","NULOJIX 250mg/vial pvo.liof.x 1"],
  ["BENDAMUSTINA","BENDAMUSTINA KEMEX 100 MG FAMP"],
  ["BENDAMUSTINA","BENDAMUSTINA MICROSULES 100 MG FAMP"],
  ["BENDAMUSTINA","BENDAMUSTINA MICROSULES 25 MG FAMP"],
  ["BENDAMUSTINA","BENDAMUSTINA VARIFARMA 100 MG FAMP"],
  ["BENDAMUSTINA","BENDAMUSTINA VARIFARMA 25 MG FAMP"],
  ["BEVACIZUMAB","AVASTIN 100 MG/4 ML AMP"],
  ["BEVACIZUMAB","AVASTIN 400 MG/16 ML AMP"],
  ["BEVACIZUMAB","BEVAX 100 mg vial x 1 x 4 ml"],
  ["BEVACIZUMAB","BEVAX 400 mg vial x 1 x 16 ml"],
  ["BEVACIZUMAB","ZIRAVEB 100 mg/4 ml a.x 1"],
  ["BEVACIZUMAB","ZIRAVEB 400 mg/16 ml a.x 1"],
  ["BLEOMICINA","BLEOMICINA SULF IVAX 15 U FCO AMP"],
  ["BORTEZOMIB","BORATER 3.5 mg f.a.x 1"],
  ["BORTEZOMIB","BORTMEX 3.5 MG INY"],
  ["BORTEZOMIB","GYSATY 3.5 mg f.a.x 1"],
  ["BRENTUXIMAB VEDOTIN","ADCETRIS 50 MG FCO AMP"],
  ["BUSULFAN","BUSULFAN VARIFARMA 60 mg f.a.x 8 x 10 ml"],
  ["CABAZITAXEl","BLACKXELL 60 MG F/A"],
  ["CABAZITAXEL","CABAZIL FA 1.5ML + DILUY"],
  ["CARBOPLATINO","CARBOPLATINO 150 MG KEMEX F.A"],
  ["CARBOPLATINO","CARBOPLATINO 150 MG MICROSULES F.A"],
  ["CARBOPLATINO","CARBOPLATINO 450 MG TEVA FCO AMP (TUTEUR)"],
  ["CARBOPLATINO","CARBOPLATINO GLENMARK 150 MG INY."],
  ["CARBOPLATINO","CARBOPLATINO GLENMARK 450 MG INY."],
  ["CARBOPLATINO","CARBOPLATINO 150MG TUTEUR LIOF"],
  ["CARBOPLATINO","CARBOPLATINO 450 MG KEMEX F.A"],
  ["CARBOPLATINO","CARBOPLATINO 450 MG MICROSULES F.A"],
  ["CARBOPLATINO","CARBOPLATINO LKM 150 MG"],
  ["CARFILZOMIB","ALCAF 60 MG"],
  ["CARFILZOMIB","CARFIZOL FAMP"],
  ["CARFILZOMIB","FILZOCAR 60 MG TUTEUR"],
  ["CETUXIMAB","ERBITUX X 1 VIAL X 100 ML"],
  ["CETUXIMAB","ERBITUX X 1 VIAL X 20 ML"],
  ["CICLOFOSFAMIDA","CICLOFOSFAMIDA 1 GR FAMP GP PHARM"],
  ["CICLOFOSFAMIDA","CICLOFOSFAMIDA 200 MG FA GPPHARM"],
  ["CICLOFOSFAMIDA","CICLOFOSFAMIDA LKM 1GR FA"],
  ["CICLOFOSFAMIDA","CICLOFOSFAMIDA MICROSULES 1GR"],
  ["CICLOFOSFAMIDA","CICLOFOSFAMIDA MICROSULES 200 MG"],
  ["CISPLATINO","CISPLATINO 10 MG FCO AMP TUTEUR"],
  ["CISPLATINO","CISPLATINO 50 MG FCO AMP TUTEUR"],
  ["CISPLATINO","CISPLATINO 50 MG KEMEX AMP"],
  ["CISPLATINO","CISPLATINO 50 MG MICROSULES AMP"],
  ["CITARABINA","CITARABINA MICROSULES 100 MG FA"],
  ["CITARABINA","CITARABINA MICROSULES 1000 MG FA"],
  ["DACARBAZINA","DACARBAZINA VARIFARMA 200 MG AMP."],
  ["DACARBAZINA","ONCOCARBIL 200 200 MG INY.LIOF.F.A.X 1"],
  ["DARATUMUMAB","DARZALEX 100 MG/5 ML x 1"],
  ["DARATUMUMAB","DARZALEX 400 MG/20 ML x 1"],
  ["DARATUMUMAB","DARZALEX SC 1800 MG/15 ML"],
  ["DECITABINA","SIGNUM 50 ML FCO.AMP x 1"],
  ["DECITABINE","DETAVI 50MG AMP"],
  ["DEGARELIX","FIRMAGON 120MG FA X 2"],
  ["DEGARELIX","FIRMAGON 80MG FA"],
  ["DENOSUMAB","PROLIA 60 MG/ML JGA PRELL"],
  ["DENOSUMAB","XGEVA 70MG/ML INY"],
  ["DOCETAXEL","DOCETAXEL 20 MG KEMEX FAMP"],
  ["DOCETAXEL","DOCETAXEL 20MG AMP MICROSULES"],
  ["DOCETAXEL","DOCETAXEL 80 MG AMP MICROSULES"],
  ["DOCETAXEL","DOCETAXEL 80 MG KEMEX FAMP"],
  ["DOSTARLIMAB","JEMPERLI 50MG x 10 ML"],
  ["DOXORUBICINA","DOXORUBICINA 10 MG MICROSULES AMP"],
  ["DOXORUBICINA","DOXORUBICINA 50 MG MICROSULES AMP"],
  ["DOXORUBICINA","DOXORUBICINA LIPOSOMAL 20 MG INY RAFFO"],
  ["DURVALUMAB","IMFINZI 120 MG VIAL X 2.4 ML x 1"],
  ["DURVALUMAB","IMFINZI 500 MG VIAL X 10 ML x 1"],
  ["EPIRUBICINA","EPIRUBICINA 50 MG IMA INY"],
  ["ERIBULINA MASILATO","ELEFIX VIAL X 1 X 2 ML"],
  ["ERITROPOYECTINA RECOMB.HUMANA","HEMAX 10.000 UI FCO AMP"],
  ["ETOPOSIDO","ETOPOSIDO MICROSULES 100 MG INY.A.X 1 X 5 ML"],
  ["FILGRASTIM","FILGEN 300 MCG JGA.PRELL.X 5"],
  ["FILGRASTIM","NEUTROMAX 30 MUI (300 MCG) F.A.X 5"],
  ["FILGRASTIM","NEUTROMAX 48 MUI (480 MCG) AMP X 5"],
  ["FLUOROURACILO","FLUOROURACILO KEMEX 500 MG FCO AMP"],
  ["FLUOROURACILO","FLUOROURACILO MICROSULES 500MG INY"],
  ["FOSAPREPITANT DIMEGLUMINA","EMEND IV VIAL 150 MG"],
  ["GEMCITABINA","GEMCITABINA 1 GR GP PHARM F.AMP"],
  ["GEMCITABINA","GEMCITABINA 1 GR KEMEX F.AMP."],
  ["GEMCITABINA","GEMCITABINA 200 MG GP PHARM F.AMP."],
  ["GEMCITABINA","GEMCITABINA 200 MG KEMEX F.AMP."],
  ["GOSERELIN","ZOLADEX 3.6 MG INY"],
  ["GOSERELIN","ZOLADEX LA 10.8 MG INY"],
  ["HIERRO","FERINJECT INY"],
  ["IFOSFAMIDA","IFOSFAMIDA 1 GR MICROSULES"],
  ["INFLIXIMAB","IXIFI 100 MG AMP x 1"],
  ["INMUNOGLOBULINA HUMANA NORMAL","PRIVIGEN 10 GR FA 100 ML"],
  ["INMUNOGLOBULINA HUMANA NORMAL","PRIVIGEN 5 GR FA 50 ML"],
  ["INMUNOGLOBULINA HUMANA NORMAL 5%","CIELDOM 5 GR FA X 100 ML"],
  ["IPILIMUMAB","YERVOY 50 mg/10 ml vial x 1"],
  ["IRINOTECAN","IRINOTECAN GLENMARK 100 MG FA"],
  ["IRINOTECAN","IRINOTECAN KEMEX 100 MG FA"],
  ["IRINOTECAN","IRINOTECAN MICROSULES 100 MG FCOAMP"],
  ["ISATUXIMAB","SARCLISA 100 MG FCO AMP"],
  ["ISATUXIMAB","SARCLISA 500 MG FCO AMP"],
  ["LEUCOVORINA","LEUCOCALCIN 15 MG COMP"],
  ["LEUCOVORINA CALCICA","LEUCOVORINA 50 MG TUTEUR AMP"],
  ["LEUCOVORINA","50MG INY. F.A. X 1 MICROSULES"],
  ["LIPEGFILGRASTIM","LONQUEX 6 MG JGA PRELL X 1"],
  ["MELFALANO INYECTABLE IM","MELFALAN FRIMIRT 50 MG IV"],
  ["MEPREDNISONA","DELTISONA B 40 MG COMP.X 20"],
  ["METOTREXATO","METOTREXATO 1000 MG FAMP MICROSULES"],
  ["METOTREXATO","METOTREXATO 50 MG FAMP MICROSULES"],
  ["METOTREXATO","METOTREXATO 500 MG FAMP MICROSULES"],
  ["MITOMICINA","MITOMICINA C 20 MG F AMP MICROSULES"],
  ["NATALIZUMAB","TYSABRI 150 MG/ML JER.PRELL. X 2"],
  ["NATALIZUMAB","TYSABRI 300 mg/15 ml vial x 1"],
  ["NETUPITANT","AKYNZEO"],
  ["NIVOLUMAB","OPDIVIO 100 mg/10 ml vial x 1"],
  ["NIVOLUMAB","OPDIVIO 40 mg/4 ml vial x 1"],
  ["NIVOLUMAB","OPDIVO 240MG/24ML"],
  ["OBINUTUZUMAB","GAZYVA 1000 MG / 40 ML VIAL"],
  ["OCRELIZUMAB","OCREVUS 300 mg/10 ml vial x 1"],
  ["OCTREOTTIDA","SANDOSTATIN LAR 20 MG JGA PRE x 1"],
  ["OCTREOTTIDA","SANDOSTATIN LAR 30 MG JGA PRE x 1"],
  ["OMALIZUMAB","XOLAIR 150 MG FAMP X 1"],
  ["OMALIZUMAB","XOLAIR 150 MG JGA PRELL X 1"],
  ["ONDANSETRON","ONDANSETRON FRESENIUS 8 MG AMPOLLAS"],
  ["ONDANSETRON","ONDANSETRON LKM 8 8 MG COMP.X 10"],
  ["OXALIPLATINO","OXALIPLATINO KEMEX100MG INY"],
  ["OXALIPLATINO","OXALIPLATINO MICROSULES 100MG INY"],
  ["OXALIPLATINO","OXALIPLATINO 50 MG KEMEX INY"],
  ["OXALIPLATINO","OXALIPLATINO MICROSULES 50MG INY"],
  ["PACLITAXEL","PACLITAXEL KEMEX 30 MG"],
  ["PACLITAXEL","PACLITAXEL KEMEX 100 MG"],
  ["PACLITAXEL","PACLITAXEL KEMEX 150 MG"],
  ["PACLITAXEL ALBUMINA","TAYCOVIT A"],
  ["PACLITAXEL + ALBUMINA","ABRAXANE 100MG INY"],
  ["PAMIDRONATO DISODICO","AMINOMUX 30 MG INY.LIOF.F.A.X 1"],
  ["PAMIDRONATO DISODICO","AMINOMUX 90 MG INY.LIOF.F.A.X 1"],
  ["PANITUMUMAB INYECTABLE IV","VECTIBIX 100 MG X 5ML"],
  ["PEGASPARGASA","ONCASPAR PVO.P/SOL.INY.VIAL X 1"],
  ["PEGFILGRASTIM","PEG NEUTROPINE PA 6MG JGA.PRELL.X1+PROT.A."],
  ["PEMBROLIZUMAB","KEYTRUDA ENVASE 100 MG VIAL X 2"],
  ["PEMETREXED","PEMETREXED 500 GP FARM"],
  ["PEMETREXED","PEMETREXED 500 KEMEX FCO AMP"],
  ["PERTUZUMAB","PERJETA 420 mg/14 ml a.x 1"],
  ["PERTUZUMAB + TRASTUZUMAB SC","PERJETA - HERCEPTIN IV COMBO PACK Kit Inyectable"],
  ["PERTUZUMAB + TRASTUZUMAB SC","PHESGO 1200/600MG VIAL X1 X15ML"],
  ["PERTUZUMAB + TRASTUZUMAB SC","PHESGO 600/600 VIAL X 10 ML"],
  ["PLERIZAFOR","REVIXIL 20 MG X 1"],
  ["RAMUCIRUMAB","CYRAMZA 500 MG 10 MG/ML F.A.X 1 X 50 ML"],
  ["RITUXIMAB SC","MABTHERA SC 1400 mg/11.7 ml vial x 1"],
  ["RITUXIMAB IV","NOVEX 100 MG VIAL ENV X 1 AMP"],
  ["RITUXIMAB IV","NOVEX 500 MG VIAL x 1"],
  ["RITUXIMAB IV","RUXIENCE 100 mg/10 ml f.a x 2"],
  ["RITUXIMAB IV","RUXIENCE 500 MG VIAL"],
  ["RITUXIMAB IV","TRUXIMA 100 mg/10 ml f.a x 2"],
  ["RITUXIMAB IV","TRUXIMA 500 mg/50 ml f.a x 1"],
  ["SECUKINUMAB","COSENTYX 150MG / 1ML AUTOINY X 1"],
  ["SECUKINUMAB","COSENTYX 300MG / 2ML AUTOINY X 1"],
  ["SOMATOTROFINA","NORDITROPIN FLEXPRO 15 MG X 1"],
  ["TOXINA BOTULINICA","TOXINA BOTULINICA (BOTOX) 100UI AMP"],
  ["TRABECTEDINA","YONDELIS 1 MG FCO AMP"],
  ["TRASTUZUMAB","ENHERTU"],
  ["TRASTUZUMAB","HERCEPTIN 440 MG X 50 ML AMP"],
  ["TRASTUZUMAB","HERCEPTIN SC 600 mg/5 ml vial x 1"],
  ["TRASTUZUMAB","TRAZIMERA 440 mg f.a. x 1+ solv."],
  ["TRASTUZUMAB","TUZEPTA 440 mg f.a. x 1+ solv."],
  ["TRASTUZUMAB EMTANSINA","KADCYLA 100 MG X 1 VIAL x 1"],
  ["TRASTUZUMAB EMTANSINA","KADCYLA 160 MG X 1 VIAL x 1"],
  ["TRIPTORELINA","DECAPEPTYL RETARD IM 3.75 MG KIT"],
  ["TRIPTORELINA","DECAPEPTYL RETARD IM 11.25 MG KIT"],
  ["USTEKINUMAB","STELARA 90 MG/1 ML VIAL+J.PRELL"],
  ["USTEKINUMAB","STELARA IV 130MG/26ML VIAL"],
  ["VEDOLIZUMAB","ENTYVIO 300 MG VIAL"],
  ["VEDOLIZUMAB","ENTYVIO SC JGA PRELL"],
  ["VINBLASTINA","VINBLASTINA KEMEX 10MG x 1"],
  ["VINCRISTINA","VINCRISTINA KEMEX 1 MG INY.A.X 1"],
  ["VINCRISTINA","VINCRISTINA LKM 1 1 MG INY.A.X 1"],
  ["VINORELBINE","VINOREL 10 MG FCO AMP"]
].map(([droga, medicamento]) => ({
  financiador: "FEMÉDICA Alto Costo",
  droga,
  medicamento,
  auditoria: "No informado"
})));

MEDICAMENTOS.push(...[
  ["ACETATO DE LEUPROLIDE","ELIGARD 22.5 MG KIT"],
  ["ACETATO DE LEUPROLIDE","ELIGARD 45 MG KIT X 1"],
  ["ACETATO DE LEUPROLIDE","LECTRUM 22,5 ML KIT"],
  ["ACETATO DE LEUPROLIDE","LECTRUM 3.75 MG KIT"],
  ["ACETATO DE LEUPROLIDE","LECTRUM 7.5 MG KIT"],
  ["ACIDO ZOLEDRONICO","ACIDO ZOLEDR.MICROSULES 4 MG AMP"],
  ["ADALIMUMAB","AMGEVITA 40MG/0.8ML AUTOINY X 2"],
  ["ADALIMUMAB","HUMIRA AC LAP AUTOINY 0.4ML X 2"],
  ["ADALIMUMAB","HUMIRA AC LAP AUTOINY 0.8ML X 1"],
  ["APREPITANT","EMEND TRIPACK CAPS.X 1+CAPS.X2"],
  ["ATEZOLIZUMAB","TECENTRIQ 1200mg vial x 1 x 20 ml"],
  ["ATEZOLIZUMAB","TECENTRIQ 840 mg vial x 1 x 14 ml"],
  ["AZACITIDINA","AZAMEX 100 mg f.a.x 1"],
  ["AZACITIDINA","AZZA 100 mg iny.liof.f.a.x 1"],
  ["AZACITIDINA","AZACITIDINA LKM 100 MG AMP"],
  ["BACILO DE CALMETTE GUERIN","BCG CULTIVO SSI FCO AMP X 4"],
  ["BACILO DE CALMETTE GUERIN","CARCIVAC FCO AMP"],
  ["BELATACEPT","NULOJIX 250mg/vial pvo.liof.x 1"],
  ["BENDAMUSTINA","BENDAMUSTINA KEMEX 100 MG FAMP"],
  ["BENDAMUSTINA","BENDAMUSTINA MICROSULES 100 MG FAMP"],
  ["BENDAMUSTINA","BENDAMUSTINA MICROSULES 25 MG FAMP"],
  ["BENDAMUSTINA","BENDAMUSTINA VARIFARMA 100 MG FAMP"],
  ["BENDAMUSTINA","BENDAMUSTINA VARIFARMA 25 MG FAMP"],
  ["BEVACIZUMAB","AVASTIN 100 MG/4 ML AMP"],
  ["BEVACIZUMAB","AVASTIN 400 MG/16 ML AMP"],
  ["BEVACIZUMAB","BEVAX 100 mg vial x 1 x 4 ml"],
  ["BEVACIZUMAB","BEVAX 400 mg vial x 1 x 16 ml"],
  ["BEVACIZUMAB","ZIRAVEB 100 mg/4 ml a.x 1"],
  ["BEVACIZUMAB","ZIRAVEB 400 mg/16 ml a.x 1"],
  ["BLEOMICINA","BLEOMICINA SULF IVAX 15 U FCO AMP"],
  ["BORTEZOMIB","BORATER 3.5 mg f.a.x 1"],
  ["BORTEZOMIB","BORTMEX 3.5 MG INY"],
  ["BORTEZOMIB","GYSATY 3.5 mg f.a.x 1"],
  ["BRENTUXIMAB VEDOTIN","ADCETRIS 50 MG FCO AMP"],
  ["BUSULFAN","BUSULFAN 60 mg f.a.x 8 x 10 ml"],
  ["CABAZITAXEl","BLACKXELL 60 MG F/A"],
  ["CABAZITAXEL","CABAZIL FA 1.5ML + DILUY"],
  ["CARBOPLATINO","CARBOPLATINO 150 MG KEMEX F.A"],
  ["CARBOPLATINO","CARBOPLATINO 150 MG MICROSULES F.A"],
  ["CARBOPLATINO","CARBOPLATINO 450 MG TEVA FCO AMP (TUTEUR)"],
  ["CARBOPLATINO","CARBOPLATINO GLENMARK 150 MG INY."],
  ["CARBOPLATINO","CARBOPLATINO GLENMARK 450 MG INY."],
  ["CARBOPLATINO","CARBOPLATINO 150MG TUTEUR LIOF"],
  ["CARBOPLATINO","CARBOPLATINO 450 MG KEMEX F.A"],
  ["CARBOPLATINO","CARBOPLATINO 450 MG MICROSULES F.A"],
  ["CARBOPLATINO","CARBOPLATINO LKM 150 MG"],
  ["CARFILZOMIB","ALCAF 60 MG"],
  ["CARFILZOMIB","CARFIZOL FAMP"],
  ["CARFILZOMIB","FILZOCAR 60 MG TUTEUR"],
  ["CETUXIMAB","ERBITUX X 1 VIAL X 100 ML"],
  ["CETUXIMAB","ERBITUX X 1 VIAL X 20 ML"],
  ["CICLOFOSFAMIDA","CICLOFOSFAMIDA 1 GR FAMP GP PHARM"],
  ["CICLOFOSFAMIDA","CICLOFOSFAMIDA 200 MG FA GPPHARM"],
  ["CICLOFOSFAMIDA","CICLOFOSFAMIDA LKM 1GR FA"],
  ["CICLOFOSFAMIDA","CICLOFOSFAMIDA MICROSULES 1GR"],
  ["CICLOFOSFAMIDA","CICLOFOSFAMIDA MICROSULES 200 MG"],
  ["CISPLATINO","CISPLATINO 10 MG FCO AMP TUTEUR"],
  ["CISPLATINO","CISPLATINO 50 MG FCO AMP TUTEUR"],
  ["CISPLATINO","CISPLATINO 50 MG KEMEX AMP"],
  ["CISPLATINO","CISPLATINO 50 MG MICROSULES AMP"],
  ["CITARABINA","CITARABINA MICROSULES 100 MG FA"],
  ["CITARABINA","CITARABINA MICROSULES 1000 MG FA"],
  ["DACARBAZINA","DACARBAZINA VARIFARMA 200 MG AMP."],
  ["DACARBAZINA","ONCOCARBIL 200 200 MG INY.LIOF.F.A.X 1"],
  ["DARATUMUMAB","DARZALEX 100 MG/5 ML x 1"],
  ["DARATUMUMAB","DARZALEX 400 MG/20 ML x 1"],
  ["DARATUMUMAB","DARZALEX SC 1800 MG/15 ML"],
  ["DECITABINA","SIGNUM 50 ML FCO.AMP x 1"],
  ["DECITABINE","DETAVI 50MG AMP"],
  ["DEGARELIX","FIRMAGON 120MG FA X 2"],
  ["DEGARELIX","FIRMAGON 80MG FA"],
  ["DENOSUMAB","PROLIA 60 MG/ML JGA PRELL"],
  ["DENOSUMAB","XGEVA 70MG/ML INY"],
  ["DOCETAXEL","DOCETAXEL 20 MG KEMEX FAMP"],
  ["DOCETAXEL","DOCETAXEL 20MG AMP MICROSULES"],
  ["DOCETAXEL","DOCETAXEL 80 MG AMP MICROSULES"],
  ["DOCETAXEL","DOCETAXEL 80 MG KEMEX FAMP"],
  ["DOSTARLIMAB","JEMPERLI 50MG x 10 ML"],
  ["DOSTARLIMAB","JEMPERLI 50MG x 10ML"],
  ["DOXORUBICINA","DOXORUBICINA 10 MG MICROSULES AMP"],
  ["DOXORUBICINA","DOXORUBICINA 50 MG MICROSULES AMP"],
  ["DOXORUBICINA","DOXORUBICINA LIPOSOMAL 20 MG INY RAFFO"],
  ["DURVALUMAB","IMFINZI 120 MG VIAL X 2.4 ML x 1"],
  ["DURVALUMAB","IMFINZI 500 MG VIAL X 10 ML x 1"],
  ["EPIRUBICINA","EPIRUBICINA 50 MG IMA INY"],
  ["ERIBULINA MASILATO","ELEFIX VIAL X 1 X 2 ML"],
  ["ERITROPOYECTINA RECOMB.HUMANA","HEMAX 10.000 UI FCO AMP"],
  ["ETOPOSIDO","ETOPOSIDO MICROSULES 100 MG INY.A.X 1 X 5 ML"],
  ["FILGRASTIM","FILGEN 300 MCG JGA.PRELL.X 5"],
  ["FILGRASTIM","NEUTROMAX 30 MUI (300 MCG) F.A.X 5"],
  ["FILGRASTIM","NEUTROMAX 48 MUI (480 MCG) AMP X 5"],
  ["FLUOROURACILO","FLUOROURACILO KEMEX 500 MG FCO AMP"],
  ["FLUOROURACILO","FLUOROURACILO MICROSULES 500MG INY"],
  ["FOSAPREPITANT DIMEGLUMINA","EMEND IV VIAL 150 MG"],
  ["GEMCITABINA","GEMCITABINA 1 GR GP PHARM F.AMP"],
  ["GEMCITABINA","GEMCITABINA 1 GR KEMEX F.AMP."],
  ["GEMCITABINA","GEMCITABINA 200 MG GP PHARM F.AMP."],
  ["GEMCITABINA","GEMCITABINA 200 MG KEMEX F.AMP."],
  ["GOSERELIN","ZOLADEX 3.6 MG INY"],
  ["GOSERELIN","ZOLADEX LA 10.8 MG INY"],
  ["HIERRO","FERINJECT INY"],
  ["IFOSFAMIDA","IFOSFAMIDA 1 GR MICROSULES"],
  ["IMATINIB","AGACEL 100 MG COMP x 180"],
  ["IMATINIB","AGACEL 400 MG COMP x 30"],
  ["IMATINIB","GLIVEC 100 MG COMP x 60"],
  ["IMATINIB","GLIVEC 400 MG COMP x 30"],
  ["IMATINIB","TIMAB 100 MG COMP x 180"],
  ["IMATINIB","TIMAB 400 MG COMP x 30"],
  ["INFLIXIMAB","IXIFI 100 MG AMP x 1"],
  ["INMUNOGLOBULINA HUMANA NORMAL","CIELDOM 5 GR FA X 100 ML"],
  ["INMUNOGLOBULINA HUMANA NORMAL","PRIVIGEN 10 GR FA 100 ML"],
  ["INMUNOGLOBULINA HUMANA NORMAL","PRIVIGEN 5 GR FA 50 ML"],
  ["IPILIMUMAB","YERVOY 50 mg/10 ml vial x 1"],
  ["IRINOTECAN","IRINOTECAN GLENMARK 100 MG FA"],
  ["IRINOTECAN","IRINOTECAN KEMEX 100 MG FA"],
  ["IRINOTECAN","IRINOTECAN MICROSULES 100 MG FCOAMP"],
  ["ISATUXIMAB","SARCLISA (ISATUXIMAB 100 MG FCO AMP"],
  ["ISATUXIMAB","SARCLISA (ISATUXIMAB 500 MG FCO AMP"],
  ["LEUCOVORINA","LEUCOCALCIN 15 MG COMP"],
  ["LEUCOVORINA CALCICA","LEUCOVORINA 50 MG TUTEUR AMP"],
  ["LIPEGFILGRASTIM","LONQUEX 6 MG JGA PRELL X 1"],
  ["MELFALANO INYECTABLE IM","MELFALAN FRIMIRT 50 MG IV"],
  ["MEPREDNISONA","DELTISONA B 40 MG COMP.X 20"],
  ["METOTREXATO","METOTREXATO 1000 MG FAMP MICROSULES"],
  ["METOTREXATO","METOTREXATO 50 MG FAMP MICROSULES"],
  ["METOTREXATO","METOTREXATO 500 MG FAMP MICROSULES"],
  ["MITOMICINA","MITOMICINA C 20 MG F AMP MICROSULES"],
  ["NATALIZUMAB","TYSABRI 150 MG/ML JER.PRELL. X 2"],
  ["NATALIZUMAB","TYSABRI 300 mg/15 ml vial x 1"],
  ["NETUPITANT","AKYNZEO"],
  ["NIVOLUMAB","OPDIVIO 100 mg/10 ml vial x 1"],
  ["NIVOLUMAB","OPDIVIO 40 mg/4 ml vial x 1"],
  ["NIVOLUMAB","OPDIVO 240MG/24ML"],
  ["OBINUTUZUMAB","GAZYVA 1000 MG / 40 ML VIAL"],
  ["OCRELIZUMAB","OCREVUS 300 mg/10 ml vial x 1"],
  ["OCTREOTTIDA","SANDOSTATIN LAR 20 MG JGA PRE x 1"],
  ["OCTREOTTIDA","SANDOSTATIN LAR 30 MG JGA PRE x 1"],
  ["OMALIZUMAB","XOLAIR 150 MG FAMP X 1"],
  ["OMALIZUMAB","XOLAIR 150 MG JGA PRELL X 1"],
  ["ONDANSETRON","ONDANSETRON FRESENIUS 8 MG AMPOLLAS"],
  ["ONDANSETRON","ONDANSETRON LKM 8 8 MG COMP.X 10"],
  ["OXALIPLATINO","OXALIPLATINO KEMEX100MG INY"],
  ["OXALIPLATINO","OXALIPLATINO MICROSULES 100MG INY"],
  ["OXALIPLATINO","OXALIPLATINO 50 MG KEMEX INY"],
  ["OXALIPLATINO","OXALIPLATINO MICROSULES 50MG INY"],
  ["OXALIPLATINO","PACLITAXEL KEMEX 30 MG"],
  ["PACLITAXEL","PACLITAXEL KEMEX 100 MG"],
  ["PACLITAXEL","PACLITAXEL KEMEX 150 MG"],
  ["PACLITAXEL ALBUMINA","TAYCOVIT A"],
  ["PACLITAXEL + ALBUMINA","ABRAXANE 100MG INY"],
  ["PAMIDRONATO DISODICO","AMINOMUX 30 MG INY.LIOF.F.A.X 1"],
  ["PAMIDRONATO DISODICO","AMINOMUX 90 MG INY.LIOF.F.A.X 1"],
  ["PANITUMUMAB INYECTABLE IV","VECTIBIX 100 MG X 5ML"],
  ["PEGASPARGASA","ONCASPAR PVO.P/SOL.INY.VIAL X 1"],
  ["PEGFILGRASTIM","PEG NEUTROPINE PA 6MG JGA.PRELL.X1+PROT.A."],
  ["PEMBROLIZUMAB","KEYTRUDA ENVASE 100 MG VIAL X 2"],
  ["PEMETREXED","PEMETREXED 500 GP FARM"],
  ["PEMETREXED","PEMETREXED 500 KEMEX FCO AMP"],
  ["PERTUZUMAB","PERJETA 420 mg/14 ml a.x 1"],
  ["PERTUZUMAB + TRASTUZUMAB SC","PERJETA - HERCEPTIN IV COMBO PACK Kit Inyectable"],
  ["PERTUZUMAB + TRASTUZUMAB SC","PHESGO 1200/600MG VIAL X1 X15ML"],
  ["PERTUZUMAB + TRASTUZUMAB SC","PHESGO 600/600 VIAL X 10 ML"],
  ["PLERIZAFOR","REVIXIL 20 MG X 1"],
  ["RAMUCIRUMAB","CYRAMZA 500 MG 10 MG/ML F.A.X 1 X 50 ML"],
  ["RITUXIMAB SC","MABTHERA SC 1400 mg/11.7 ml vial x 1"],
  ["RITUXIMAB IV","NOVEX 100 MG VIAL ENV X 1 AMP"],
  ["RITUXIMAB IV","NOVEX 500 MG VIAL x 1"],
  ["RITUXIMAB IV","RUXIENCE 100 mg/10 ml f.a x 2"],
  ["RITUXIMAB IV","RUXIENCE 500 MG VIAL"],
  ["RITUXIMAB IV","TRUXIMA 100 mg/10 ml f.a x 2"],
  ["RITUXIMAB IV","TRUXIMA 500 mg/50 ml f.a x 1"],
  ["SECUKINUMAB","COSENTYX 150MG / 1ML AUTOINY X 1"],
  ["SECUKINUMAB","COSENTYX 300MG / 2ML AUTOINY X 1"],
  ["SOMATOTROFINA","NORDITROPIN FLEXPRO 15 MG X 1"],
  ["TOXINA BOTULINICA","TOXINA BOTULINICA (BOTOX) 100UI AMP"],
  ["TRABECTEDINA","YONDELIS 1 MG FCO AMP"],
  ["TRASTUZUMAB","HERCEPTIN 440 MG X 50 ML AMP"],
  ["TRASTUZUMAB","HERCEPTIN SC 600 mg/5 ml vial x 1"],
  ["TRASTUZUMAB","TRAZIMERA 440 mg f.a. x 1+ solv."],
  ["TRASTUZUMAB","TUZEPTA 440 mg f.a. x 1+ solv."],
  ["TRASTUZUMAB EMTANSINA","KADCYLA 100 MG X 1 VIAL x 1"],
  ["TRASTUZUMAB EMTANSINA","KADCYLA 160 MG X 1 VIAL x 1"],
  ["TRIPTORELINA","DECAPEPTYL RETARD IM 3.75 MG KIT"],
  ["TRIPTORELINA","DECAPEPTYL RETARD IM 11.25 MG KIT"],
  ["USTEKINUMAB","STELARA 90 MG/1 ML VIAL+J.PRELL"],
  ["USTEKINUMAB","STELARA IV 130MG/26ML VIAL"],
  ["VEDOLIZUMAB","ENTYVIO 300 MG VIAL"],
  ["VEDOLIZUMAB","ENTYVIO SC JGA PRELL"],
  ["VINBLASTINA","VINBLASTINA KEMEX 10MG x 1"],
  ["VINCRISTINA","VINCRISTINA KEMEX 1 MG INY.A.X 1"],
  ["VINCRISTINA","VINCRISTINA LKM 1 1 MG INY.A.X 1"],
  ["VINORELBINE","VINORELBINE 10 MG FCO AMP VINOREL"],
  ["ONDANSETRON","ONDANSETRON FABRA 8 MG AMPOLLAS"],
  ["ZAVICEFTA","ZAVICEFTA 2G / 0.5 FCO AMP"]
].map(([droga, medicamento]) => ({
  financiador: "IASEP Formosa",
  droga,
  medicamento,
  auditoria: "No informado"
})));

MEDICAMENTOS.push(...[
  ["ACETATO DE LEUPROLIDE","ELIGARD 22.5 MG KIT"],
  ["ACETATO DE LEUPROLIDE","ELIGARD 45 MG KIT X 1"],
  ["ACETATO DE LEUPROLIDE","LECTRUM 22,5 ML KIT"],
  ["ACETATO DE LEUPROLIDE","LECTRUM 3.75 MG KIT"],
  ["ACETATO DE LEUPROLIDE","LECTRUM 7.5 MG KIT"],
  ["ACIDO ZOLEDRONICO","ACIDO ZOLEDR.MICROSULES 4 MG AMP"],
  ["ADALIMUMAB","AMGEVITA 40MG/0.8ML AUTOINY X 2"],
  ["ADALIMUMAB","HUMIRA AC LAP AUTOINY 0.4ML X 2"],
  ["ADALIMUMAB","HUMIRA AC LAP AUTOINY 0.8ML X 1"],
  ["APREPITANT","EMEND TRIPACK CAPS.X 1+CAPS.X2"],
  ["ATEZOLIZUMAB","TECENTRIQ 1200mg vial x 1 x 20 ml"],
  ["ATEZOLIZUMAB","TECENTRIQ 840 mg vial x 1 x 14 ml"],
  ["AZACITIDINA","AZAMEX 100 mg f.a.x 1"],
  ["AZACITIDINA","AZZA 100 mg iny.liof.f.a.x 1"],
  ["AZACITIDINA","AZACITIDINA LKM 100 MG AMP"],
  ["BACILO DE CALMETTE GUERIN","BCG CULTIVO SSI FCO AMP X 4"],
  ["BACILO DE CALMETTE GUERIN","CARCIVAC FCO AMP"],
  ["BELATACEPT","NULOJIX 250mg/vial pvo.liof.x 1"],
  ["BENDAMUSTINA","BENDAMUSTINA KEMEX 100 MG FAMP"],
  ["BENDAMUSTINA","BENDAMUSTINA MICROSULES 100 MG FAMP"],
  ["BENDAMUSTINA","BENDAMUSTINA MICROSULES 25 MG FAMP"],
  ["BENDAMUSTINA","BENDAMUSTINA VARIFARMA 100 MG FAMP"],
  ["BENDAMUSTINA","BENDAMUSTINA VARIFARMA 25 MG FAMP"],
  ["BEVACIZUMAB","AVASTIN 100 MG/4 ML AMP"],
  ["BEVACIZUMAB","AVASTIN 400 MG/16 ML AMP"],
  ["BEVACIZUMAB","BEVAX 100 mg vial x 1 x 4 ml"],
  ["BEVACIZUMAB","BEVAX 400 mg vial x 1 x 16 ml"],
  ["BEVACIZUMAB","ZIRAVEB 100 mg/4 ml a.x 1"],
  ["BEVACIZUMAB","ZIRAVEB 400 mg/16 ml a.x 1"],
  ["BLEOMICINA","BLEOMICINA SULF IVAX 15 U FCO AMP"],
  ["BORTEZOMIB","BORATER 3.5 mg f.a.x 1"],
  ["BORTEZOMIB","BORTMEX 3.5 MG INY"],
  ["BORTEZOMIB","GYSATY 3.5 mg f.a.x 1"],
  ["BRENTUXIMAB VEDOTIN","ADCETRIS 50 MG FCO AMP"],
  ["BUSULFAN","BUSULFAN 60 mg f.a.x 8 x 10 ml"],
  ["CABAZITAXEl","BLACKXELL 60 MG F/A"],
  ["CABAZITAXEL","CABAZIL FA 1.5ML + DILUY"],
  ["CARBOPLATINO","CARBOPLATINO 150 MG KEMEX F.A"],
  ["CARBOPLATINO","CARBOPLATINO 150 MG MICROSULES F.A"],
  ["CARBOPLATINO","CARBOPLATINO 450 MG TEVA FCO AMP (TUTEUR)"],
  ["CARBOPLATINO","CARBOPLATINO GLENMARK 150 MG INY."],
  ["CARBOPLATINO","CARBOPLATINO GLENMARK 450 MG INY."],
  ["CARBOPLATINO","CARBOPLATINO 150MG TUTEUR LIOF"],
  ["CARBOPLATINO","CARBOPLATINO 450 MG KEMEX F.A"],
  ["CARBOPLATINO","CARBOPLATINO 450 MG MICROSULES F.A"],
  ["CARBOPLATINO","CARBOPLATINO LKM 150 MG"],
  ["CARFILZOMIB","ALCAF 60 MG"],
  ["CARFILZOMIB","CARFIZOL FAMP"],
  ["CARFILZOMIB","FILZOCAR 60 MG TUTEUR"],
  ["CETUXIMAB","ERBITUX X 1 VIAL X 100 ML"],
  ["CETUXIMAB","ERBITUX X 1 VIAL X 20 ML"],
  ["CICLOFOSFAMIDA","CICLOFOSFAMIDA 1 GR FAMP GP PHARM"],
  ["CICLOFOSFAMIDA","CICLOFOSFAMIDA 200 MG FA GPPHARM"],
  ["CICLOFOSFAMIDA","CICLOFOSFAMIDA LKM 1GR FA"],
  ["CICLOFOSFAMIDA","CICLOFOSFAMIDA MICROSULES 1GR"],
  ["CICLOFOSFAMIDA","CICLOFOSFAMIDA MICROSULES 200 MG"],
  ["CISPLATINO","CISPLATINO 10 MG FCO AMP TUTEUR"],
  ["CISPLATINO","CISPLATINO 50 MG FCO AMP TUTEUR"],
  ["CISPLATINO","CISPLATINO 50 MG KEMEX AMP"],
  ["CISPLATINO","CISPLATINO 50 MG MICROSULES AMP"],
  ["CITARABINA","CITARABINA MICROSULES 100 MG FA"],
  ["CITARABINA","CITARABINA MICROSULES 1000 MG FA"],
  ["DACARBAZINA","DACARBAZINA VARIFARMA 200 MG AMP."],
  ["DACARBAZINA","ONCOCARBIL 200 200 MG INY.LIOF.F.A.X 1"],
  ["DARATUMUMAB","DARZALEX 100 MG/5 ML x 1"],
  ["DARATUMUMAB","DARZALEX 400 MG/20 ML x 1"],
  ["DARATUMUMAB","DARZALEX SC 1800 MG/15 ML"],
  ["DECITABINA","SIGNUM 50 ML FCO.AMP x 1"],
  ["DECITABINE","DETAVI 50MG AMP"],
  ["DEGARELIX","FIRMAGON 120MG FA X 2"],
  ["DEGARELIX","FIRMAGON 80MG FA"],
  ["DENOSUMAB","PROLIA 60 MG/ML JGA PRELL"],
  ["DENOSUMAB","XGEVA 70MG/ML INY"],
  ["DOCETAXEL","DOCETAXEL 20 MG KEMEX FAMP"],
  ["DOCETAXEL","DOCETAXEL 20MG AMP MICROSULES"],
  ["DOCETAXEL","DOCETAXEL 80 MG AMP MICROSULES"],
  ["DOCETAXEL","DOCETAXEL 80 MG KEMEX FAMP"],
  ["DOSTARLIMAB","JEMPERLI 50MG x 10 ML"],
  ["DOXORUBICINA","DOXORUBICINA 10 MG MICROSULES AMP"],
  ["DOXORUBICINA","DOXORUBICINA 50 MG MICROSULES AMP"],
  ["DOXORUBICINA","DOXORUBICINA LIPOSOMAL 20 MG INY RAFFO"],
  ["DURVALUMAB","IMFINZI 120 MG VIAL X 2.4 ML x 1"],
  ["DURVALUMAB","IMFINZI 500 MG VIAL X 10 ML x 1"],
  ["EPIRUBICINA","EPIRUBICINA 50 MG IMA INY"],
  ["ERIBULINA MASILATO","ELEFIX VIAL X 1 X 2 ML"],
  ["ERITROPOYECTINA RECOMB.HUMANA","HEMAX 10.000 UI FCO AMP"],
  ["ETOPOSIDO","ETOPOSIDO MICROSULES 100 MG INY.A.X 1 X 5 ML"],
  ["FILGRASTIM","FILGEN 300 MCG JGA.PRELL.X 5"],
  ["FILGRASTIM","NEUTROMAX 30 MUI (300 MCG) F.A.X 5"],
  ["FILGRASTIM","NEUTROMAX 48 MUI (480 MCG) AMP X 5"],
  ["FLUOROURACILO","FLUOROURACILO KEMEX 500 MG FCO AMP"],
  ["FLUOROURACILO","FLUOROURACILO MICROSULES 500MG INY"],
  ["FOSAPREPITANT DIMEGLUMINA","EMEND IV VIAL 150 MG"],
  ["GEMCITABINA","GEMCITABINA 1 GR GP PHARM F.AMP"],
  ["GEMCITABINA","GEMCITABINA 1 GR KEMEX F.AMP."],
  ["GEMCITABINA","GEMCITABINA 200 MG GP PHARM F.AMP."],
  ["GEMCITABINA","GEMCITABINA 200 MG KEMEX F.AMP."],
  ["GOSERELIN","ZOLADEX 3.6 MG INY"],
  ["GOSERELIN","ZOLADEX LA 10.8 MG INY"],
  ["HIERRO","FERINJECT INY"],
  ["IFOSFAMIDA","IFOSFAMIDA 1 GR MICROSULES"],
  ["IMATINIB","AGACEL 100 MG COMP x 180"],
  ["IMATINIB","AGACEL 400 MG COMP x 30"],
  ["IMATINIB","GLIVEC 100 MG COMP x 60"],
  ["IMATINIB","GLIVEC 400 MG COMP x 30"],
  ["IMATINIB","TIMAB 100 MG COMP x 180"],
  ["IMATINIB","TIMAB 400 MG COMP x 30"],
  ["INFLIXIMAB","IXIFI 100 MG AMP x 1"],
  ["INMUNOGLOBULINA HUMANA NORMAL","CIELDOM 5 GR FA X 100 ML"],
  ["INMUNOGLOBULINA HUMANA NORMAL","PRIVIGEN 10 GR FA 100 ML"],
  ["INMUNOGLOBULINA HUMANA NORMAL","PRIVIGEN 5 GR FA 50 ML"],
  ["IPILIMUMAB","YERVOY 50 mg/10 ml vial x 1"],
  ["IRINOTECAN","IRINOTECAN GLENMARK 100 MG FA"],
  ["IRINOTECAN","IRINOTECAN KEMEX 100 MG FA"],
  ["IRINOTECAN","IRINOTECAN MICROSULES 100 MG FCOAMP"],
  ["ISATUXIMAB","SARCLISA (ISATUXIMAB 100 MG FCO AMP"],
  ["ISATUXIMAB","SARCLISA (ISATUXIMAB 500 MG FCO AMP"],
  ["LEUCOVORINA","LEUCOCALCIN 15 MG COMP"],
  ["LEUCOVORINA CALCICA","LEUCOVORINA 50 MG TUTEUR AMP"],
  ["LIPEGFILGRASTIM","LONQUEX 6 MG JGA PRELL X 1"],
  ["MELFALANO INYECTABLE IM","MELFALAN FRIMIRT 50 MG IV"],
  ["MEPREDNISONA","DELTISONA B 40 MG COMP.X 20"],
  ["METOTREXATO","METOTREXATO 1000 MG FAMP MICROSULES"],
  ["METOTREXATO","METOTREXATO 50 MG FAMP MICROSULES"],
  ["METOTREXATO","METOTREXATO 500 MG FAMP MICROSULES"],
  ["MITOMICINA","MITOMICINA C 20 MG F AMP MICROSULES"],
  ["NATALIZUMAB","TYSABRI 150 MG/ML JER.PRELL. X 2"],
  ["NATALIZUMAB","TYSABRI 300 mg/15 ml vial x 1"],
  ["NETUPITANT","AKYNZEO"],
  ["NIVOLUMAB","OPDIVIO 100 mg/10 ml vial x 1"],
  ["NIVOLUMAB","OPDIVIO 40 mg/4 ml vial x 1"],
  ["NIVOLUMAB","OPDIVO 240MG/24ML"],
  ["OBINUTUZUMAB","GAZYVA 1000 MG / 40 ML VIAL"],
  ["OCRELIZUMAB","OCREVUS 300 mg/10 ml vial x 1"],
  ["OCTREOTTIDA","SANDOSTATIN LAR 20 MG JGA PRE x 1"],
  ["OCTREOTTIDA","SANDOSTATIN LAR 30 MG JGA PRE x 1"],
  ["OMALIZUMAB","XOLAIR 150 MG FAMP X 1"],
  ["OMALIZUMAB","XOLAIR 150 MG JGA PRELL X 1"],
  ["ONDANSETRON","ONDANSETRON FRESENIUS 8 MG AMPOLLAS"],
  ["ONDANSETRON","ONDANSETRON LKM 8 8 MG COMP.X 10"],
  ["OXALIPLATINO","OXALIPLATINO KEMEX100MG INY"],
  ["OXALIPLATINO","OXALIPLATINO MICROSULES 100MG INY"],
  ["OXALIPLATINO","OXALIPLATINO 50 MG KEMEX INY"],
  ["OXALIPLATINO","OXALIPLATINO MICROSULES 50MG INY"],
  ["OXALIPLATINO","PACLITAXEL KEMEX 30 MG"],
  ["PACLITAXEL","PACLITAXEL KEMEX 100 MG"],
  ["PACLITAXEL","PACLITAXEL KEMEX 150 MG"],
  ["PACLITAXEL ALBUMINA","TAYCOVIT A"],
  ["PACLITAXEL + ALBUMINA","ABRAXANE 100MG INY"],
  ["PAMIDRONATO DISODICO","AMINOMUX 30 MG INY.LIOF.F.A.X 1"],
  ["PAMIDRONATO DISODICO","AMINOMUX 90 MG INY.LIOF.F.A.X 1"],
  ["PANITUMUMAB INYECTABLE IV","VECTIBIX 100 MG X 5ML"],
  ["PEGASPARGASA","ONCASPAR PVO.P/SOL.INY.VIAL X 1"],
  ["PEGFILGRASTIM","PEG NEUTROPINE PA 6MG JGA.PRELL.X1+PROT.A."],
  ["PEMBROLIZUMAB","KEYTRUDA ENVASE 100 MG VIAL X 2"],
  ["PEMETREXED","PEMETREXED 500 GP FARM"],
  ["PEMETREXED","PEMETREXED 500 KEMEX FCO AMP"],
  ["PERTUZUMAB","PERJETA 420 mg/14 ml a.x 1"],
  ["PERTUZUMAB + TRASTUZUMAB SC","PERJETA - HERCEPTIN IV COMBO PACK Kit Inyectable"],
  ["PERTUZUMAB + TRASTUZUMAB SC","PHESGO 1200/600MG VIAL X1 X15ML"],
  ["PERTUZUMAB + TRASTUZUMAB SC","PHESGO 600/600 VIAL X 10 ML"],
  ["PLERIZAFOR","REVIXIL 20 MG X 1"],
  ["RAMUCIRUMAB","CYRAMZA 500 MG 10 MG/ML F.A.X 1 X 50 ML"],
  ["RITUXIMAB SC","MABTHERA SC 1400 mg/11.7 ml vial x 1"],
  ["RITUXIMAB IV","NOVEX 100 MG VIAL ENV X 1 AMP"],
  ["RITUXIMAB IV","NOVEX 500 MG VIAL x 1"],
  ["RITUXIMAB IV","RUXIENCE 100 mg/10 ml f.a x 2"],
  ["RITUXIMAB IV","RUXIENCE 500 MG VIAL"],
  ["RITUXIMAB IV","TRUXIMA 100 mg/10 ml f.a x 2"],
  ["RITUXIMAB IV","TRUXIMA 500 mg/50 ml f.a x 1"],
  ["SECUKINUMAB","COSENTYX 150MG / 1ML AUTOINY X 1"],
  ["SECUKINUMAB","COSENTYX 300MG / 2ML AUTOINY X 1"],
  ["SOMATOTROFINA","NORDITROPIN FLEXPRO 15 MG X 1"],
  ["TOXINA BOTULINICA","TOXINA BOTULINICA (BOTOX) 100UI AMP"],
  ["TRABECTEDINA","YONDELIS 1 MG FCO AMP"],
  ["TRASTUZUMAB","HERCEPTIN 440 MG X 50 ML AMP"],
  ["TRASTUZUMAB","HERCEPTIN SC 600 mg/5 ml vial x 1"],
  ["TRASTUZUMAB","TRAZIMERA 440 mg f.a. x 1+ solv."],
  ["TRASTUZUMAB","TUZEPTA 440 mg f.a. x 1+ solv."],
  ["TRASTUZUMAB EMTANSINA","KADCYLA 100 MG X 1 VIAL x 1"],
  ["TRASTUZUMAB EMTANSINA","KADCYLA 160 MG X 1 VIAL x 1"],
  ["TRIPTORELINA","DECAPEPTYL RETARD IM 3.75 MG KIT"],
  ["TRIPTORELINA","DECAPEPTYL RETARD IM 11.25 MG KIT"],
  ["TOCILIZUMAB","ACTEMRA 200 ML"],
  ["USTEKINUMAB","STELARA 90 MG/1 ML VIAL+J.PRELL"],
  ["USTEKINUMAB","STELARA IV 130MG/26ML VIAL"],
  ["VEDOLIZUMAB","ENTYVIO 300 MG VIAL"],
  ["VEDOLIZUMAB","ENTYVIO SC JGA PRELL"],
  ["VINBLASTINA","VINBLASTINA KEMEX 10MG x 1"],
  ["VINCRISTINA","VINCRISTINA KEMEX 1 MG INY.A.X 1"],
  ["VINCRISTINA","VINCRISTINA LKM 1 1 MG INY.A.X 1"],
  ["VINORELBINE","VINORELBINE 10 MG FCO AMP VINOREL"],
  ["ONDANSETRON","ONDANSETRON FABRA 8 MG AMPOLLAS"],
  ["ZANUBRUTINIB","BRUKINSA 80MG fco. Caps."],
  ["ZAVICEFTA","ZAVICEFTA 2G / 0.5 FCO AMP"]
].map(([droga, medicamento]) => ({
  financiador: "INSSSEP Chaco",
  droga,
  medicamento,
  auditoria: "No informado"
})));

MEDICAMENTOS.push(...[
  ["ACETATO DE LEUPROLIDE","LECTRUM 22,5 ML KIT"],
  ["ACETATO DE LEUPROLIDE","LECTRUM 3.75 MG KIT"],
  ["ACETATO DE LEUPROLIDE","LECTRUM 7.5 MG KIT"],
  ["ACIDO ZOLEDRONICO","ACIDO ZOLEDR.MICROSULES 4 MG AMP"],
  ["ADALIMUMAB","AMGEVITA 40MG/0.8ML AUTOINY X 2"],
  ["ADALIMUMAB","HUMIRA AC LAP AUTOINY 0.4ML X 2"],
  ["ADALIMUMAB","HUMIRA AC LAP AUTOINY 0.8ML X 1"],
  ["ALFILIBERCEPT","EYLIA 40 mg / ml"],
  ["APREPITANT","EMEND TRIPACK CAPS.X 1+CAPS.X2"],
  ["AZACITIDINA","AZAMEX 100 mg f.a.x 1"],
  ["AZACITIDINA","AZACITIDINA LKM 100 MG AMP"],
  ["BACILO DE CALMETTE GUERIN","BCG CULTIVO SSI FCO AMP X 4"],
  ["BACILO DE CALMETTE GUERIN","CARCIVAC FCO AMP"],
  ["BELATACEPT","NULOJIX 250mg/vial pvo.liof.x 1"],
  ["BENDAMUSTINA","BENDAMUSTINA KEMEX 100 MG FAMP"],
  ["BENDAMUSTINA","BENDAMUSTINA MICROSULES 100 MG FAMP"],
  ["BENDAMUSTINA","BENDAMUSTINA MICROSULES 25 MG FAMP"],
  ["BENDAMUSTINA","BENDAMUSTINA VARIFARMA 100 MG FAMP"],
  ["BENDAMUSTINA","BENDAMUSTINA VARIFARMA 25 MG FAMP"],
  ["BORTEZOMIB","BORTMEX 3.5 MG INY"],
  ["BORTEZOMIB","GYSATY 3.5 mg f.a.x 1"],
  ["CABAZITAXEL","BLACKXELL 60 MG F/A"],
  ["CABAZITAXEL","CABAZIL FA 1.5ML + DILUY"],
  ["CARBOPLATINO","CARBOPLATINO 150 MG KEMEX F.A"],
  ["CARBOPLATINO","CARBOPLATINO 150 MG MICROSULES F.A"],
  ["CARBOPLATINO","CARBOPLATINO GLENMARK 150 MG INY."],
  ["CARBOPLATINO","CARBOPLATINO GLENMARK 450 MG INY."],
  ["CARBOPLATINO","CARBOPLATINO 150MG TUTEUR LIOF"],
  ["CARBOPLATINO","CARBOPLATINO 450 MG KEMEX F.A"],
  ["CARBOPLATINO","CARBOPLATINO 450 MG MICROSULES F.A"],
  ["CARBOPLATINO","CARBOPLATINO LKM 150 MG"],
  ["CARFILZOMIB","ALCAF 60 MG"],
  ["CARFILZOMIB","CARFIZOL FAMP"],
  ["CARFILZOMIB","FILZOCAR 60 MG TUTEUR"],
  ["CICLOFOSFAMIDA","CICLOFOSFAMIDA LKM 1GR FA"],
  ["CICLOFOSFAMIDA","CICLOFOSFAMIDA MICROSULES 1GR"],
  ["CICLOFOSFAMIDA","CICLOFOSFAMIDA MICROSULES 200 MG"],
  ["CISPLATINO","CISPLATINO 10 MG FCO AMP TUTEUR"],
  ["CISPLATINO","CISPLATINO 50 MG FCO AMP TUTEUR"],
  ["CISPLATINO","CISPLATINO 50 MG KEMEX AMP"],
  ["CISPLATINO","CISPLATINO 50 MG MICROSULES AMP"],
  ["CITARABINA","CITARABINA MICROSULES 100 MG FA"],
  ["CITARABINA","CITARABINA MICROSULES 1000 MG FA"],
  ["DACARBAZINA","DACARBAZINA VARIFARMA 200 MG AMP."],
  ["DACARBAZINA","ONCOCARBIL 200 200 MG INY.LIOF.F.A.X 1"],
  ["DECITABINA","SIGNUM 50 ML FCO.AMP x 1"],
  ["DECITABINE","DETAVI 50MG AMP"],
  ["DEGARELIX","FIRMAGON 120MG FA X 2"],
  ["DEGARELIX","FIRMAGON 80MG FA"],
  ["DENOSUMAB","PROLIA 60 MG/ML JGA PRELL"],
  ["DENOSUMAB","XGEVA 70MG/ML INY"],
  ["DOCETAXEL","DOCETAXEL 20 MG KEMEX FAMP"],
  ["DOCETAXEL","DOCETAXEL 20MG AMP MICROSULES"],
  ["DOCETAXEL","DOCETAXEL 80 MG AMP MICROSULES"],
  ["DOCETAXEL","DOCETAXEL 80 MG KEMEX FAMP"],
  ["DOSTARLIMAB","JEMPERLI 50MG x 10 ML"],
  ["DOXORUBICINA","DOXORUBICINA 10 MG MICROSULES AMP"],
  ["DOXORUBICINA","DOXORUBICINA 50 MG MICROSULES AMP"],
  ["DOXORUBICINA","DOXORUBICINA LIPOSOMAL 20 MG INY RAFFO"],
  ["EPIRUBICINA","EPIRUBICINA 50 MG IMA INY"],
  ["ERIBULINA MASILATO","ELEFIX VIAL X 1 X 2 ML"],
  ["ERITROPOYECTINA RECOMB.HUMANA","HEMAX 10.000 UI FCO AMP"],
  ["ETOPOSIDO","ETOPOSIDO MICROSULES 100 MG INY.A.X 1 X 5 ML"],
  ["FILGRASTIM","NEUTROMAX 30 MUI (300 MCG) F.A.X 5"],
  ["FILGRASTIM","NEUTROMAX 48 MUI (480 MCG) AMP X 5"],
  ["FLUOROURACILO","FLUOROURACILO MICROSULES 500MG INY"],
  ["FOSAPREPITANT DIMEGLUMINA","EMEND IV VIAL 150 MG"],
  ["GEMCITABINA","GEMCITABINA 1 GR KEMEX F.AMP."],
  ["GEMCITABINA","GEMCITABINA 200 MG KEMEX F.AMP."],
  ["GOSERELIN","ZOLADEX 3.6 MG INY"],
  ["GOSERELIN","ZOLADEX LA 10.8 MG INY"],
  ["HIERRO","FERINJECT INY"],
  ["IFOSFAMIDA","IFOSFAMIDA 1 GR MICROSULES"],
  ["IMATINIB","AGACEL 100 MG COMP x 180"],
  ["IMATINIB","AGACEL 400 MG COMP x 30"],
  ["IMATINIB","TIMAB 100 MG COMP x 180"],
  ["IMATINIB","TIMAB 400 MG COMP x 30"],
  ["INFLIXIMAB","IXIFI 100 MG AMP x 1"],
  ["INMUNOGLOBULINA HUMANA NORMAL","PRIVIGEN 5 GR FA 50 ML"],
  ["IPILIMUMAB","YERVOY 50 mg/10 ml vial x 1"],
  ["IRINOTECAN","IRINOTECAN GLENMARK 100 MG FA"],
  ["IRINOTECAN","IRINOTECAN KEMEX 100 MG FA"],
  ["IRINOTECAN","IRINOTECAN MICROSULES 100 MG FCOAMP"],
  ["LEUCOVORINA CALCICA","LEUCOVORINA 50 MG TUTEUR AMP"],
  ["LEUCOVORINA","50MG INY. F.A. X 1 MICROSULES"],
  ["LIPEGFILGRASTIM","LONQUEX 6 MG JGA PRELL X 1"],
  ["MELFALANO INYECTABLE IM","MELFALAN FRIMIRT 50 MG IV"],
  ["MEPREDNISONA","DELTISONA B 40 MG COMP.X 20"],
  ["METOTREXATO","METOTREXATO 1000 MG FAMP MICROSULES"],
  ["METOTREXATO","METOTREXATO 50 MG FAMP MICROSULES"],
  ["METOTREXATO","METOTREXATO 500 MG FAMP MICROSULES"],
  ["MITOMICINA","MITOMICINA C 20 MG F AMP MICROSULES"],
  ["NETUPITANT","AKYNZEO"],
  ["OBINUTUZUMAB","GAZYVA 1000 MG / 40 ML VIAL"],
  ["OCTREOTIDA","SANDOSTATIN LAR 20 MG JGA PRE x 1"],
  ["OCTREOTIDA","SANDOSTATIN LAR 30 MG JGA PRE x 1"],
  ["OMALIZUMAB","XOLAIR 150 MG FAMP X 1"],
  ["OMALIZUMAB","XOLAIR 150 MG JGA PRELL X 1"],
  ["OXALIPLATINO","OXALIPLATINO KEMEX100MG INY"],
  ["OXALIPLATINO","OXALIPLATINO MICROSULES 100MG INY"],
  ["OXALIPLATINO","OXALIPLATINO 50 MG KEMEX INY"],
  ["OXALIPLATINO","OXALIPLATINO MICROSULES 50MG INY"],
  ["PACLITAXEL","PACLITAXEL KEMEX 30 MG"],
  ["PACLITAXEL","PACLITAXEL KEMEX 100 MG"],
  ["PACLITAXEL","PACLITAXEL KEMEX 150 MG"],
  ["PACLITAXEL ALBUMINA","TAYCOVIT A"],
  ["PACLITAXEL + ALBUMINA","ABRAXANE 100MG INY"],
  ["PAMIDRONATO DISODICO","AMINOMUX 30 MG INY.LIOF.F.A.X 1"],
  ["PAMIDRONATO DISODICO","AMINOMUX 90 MG INY.LIOF.F.A.X 1"],
  ["PANITUMUMAB INYECTABLE IV","VECTIBIX 100 MG X 5ML"],
  ["PEGASPARGASA","ONCASPAR PVO.P/SOL.INY.VIAL X 1"],
  ["PEMETREXED","PEMETREXED 500 KEMEX FCO AMP"],
  ["PLERIZAFOR","REVIXIL 20 MG X 1"],
  ["RAMUCIRUMAB","CYRAMZA 500 MG 10 MG/ML F.A.X 1 X 50 ML"],
  ["RANIBIZUMAB","LUCENTIS 1VIAL X 0,23 ML"],
  ["RITUXIMAB SC","MABTHERA SC 1400 mg/11.7 ml vial x 1"],
  ["RITUXIMAB IV","NOVEX 100 MG VIAL ENV X 1 AMP"],
  ["RITUXIMAB IV","NOVEX 500 MG VIAL x 1"],
  ["SECUKINUMAB","COSENTYX 150MG / 1ML AUTOINY X 1"],
  ["SECUKINUMAB","COSENTYX 300MG / 2ML AUTOINY X 1"],
  ["SOMATOTROFINA","NORDITROPIN FLEXPRO 15 MG X 1"],
  ["TOXINA BOTULINICA","TOXINA BOTULINICA (BOTOX) 100UI AMP"],
  ["TRABECTEDINA","YONDELIS 1 MG FCO AMP"],
  ["TRIPTORELINA","DECAPEPTYL RETARD IM 3.75 MG KIT"],
  ["TRIPTORELINA","DECAPEPTYL RETARD IM 11.25 MG KIT"],
  ["VINBLASTINA","VINBLASTINA KEMEX 10MG x 1"],
  ["VINCRISTINA","VINCRISTINA KEMEX 1 MG INY.A.X 1"],
  ["VINCRISTINA","VINCRISTINA LKM 1 1 MG INY.A.X 1"],
  ["VINORELBINE","VINOREL 10 MG FCO AMP"]
].map(([droga, medicamento]) => ({
  financiador: "MEDICUS",
  droga,
  medicamento,
  auditoria: "No informado"
})));

MEDICAMENTOS.push(...[
  ["ACETATO DE LEUPROLIDE","ELIGARD 22.5 MG KIT"],
  ["ACETATO DE LEUPROLIDE","ELIGARD 45 MG KIT X 1"],
  ["ACETATO DE LEUPROLIDE","LECTRUM 22,5 ML KIT"],
  ["ACETATO DE LEUPROLIDE","LECTRUM 3.75 MG KIT"],
  ["ACETATO DE LEUPROLIDE","LECTRUM 7.5 MG KIT"],
  ["ACIDO ZOLEDRONICO","ACIDO ZOLEDR.MICROSULES 4 MG AMP"],
  ["ADALIMUMAB","AMGEVITA 40MG/0.8ML AUTOINY X 2"],
  ["ADALIMUMAB","HUMIRA AC LAP AUTOINY 0.4ML X 2"],
  ["ADALIMUMAB","HUMIRA AC LAP AUTOINY 0.8ML X 1"],
  ["ALBUMINA HUMANA","INFINITY PHARMA"],
  ["ALFILIBERCEPT","EYLIA 40 mg / ml"],
  ["APREPITANT","EMEND TRIPACK CAPS.X 1+CAPS.X2"],
  ["ATEZOLIZUMAB","TECENTRIQ 1200mg vial x 1 x 20 ml"],
  ["ATEZOLIZUMAB","TECENTRIQ 840 mg vial x 1 x 14 ml"],
  ["AZACITIDINA","AZAMEX 100 mg f.a.x 1"],
  ["AZACITIDINA","AZZA 100 mg iny.liof.f.a.x 1"],
  ["AZACITIDINA","AZACITIDINA LKM 100 MG AMP"],
  ["BACILO DE CALMETTE GUERIN","BCG CULTIVO SSI FCO AMP X 4"],
  ["BACILO DE CALMETTE GUERIN","CARCIVAC FCO AMP"],
  ["BELATACEPT","NULOJIX 250mg/vial pvo.liof.x 1"],
  ["BENDAMUSTINA","BENDAMUSTINA KEMEX 100 MG FAMP"],
  ["BENDAMUSTINA","BENDAMUSTINA MICROSULES 100 MG FAMP"],
  ["BENDAMUSTINA","BENDAMUSTINA MICROSULES 25 MG FAMP"],
  ["BENDAMUSTINA","BENDAMUSTINA VARIFARMA 100 MG FAMP"],
  ["BENDAMUSTINA","BENDAMUSTINA VARIFARMA 25 MG FAMP"],
  ["BEVACIZUMAB","AVASTIN 100 MG/4 ML AMP"],
  ["BEVACIZUMAB","AVASTIN 400 MG/16 ML AMP"],
  ["BEVACIZUMAB","BEVAX 100 mg vial x 1 x 4 ml"],
  ["BEVACIZUMAB","BEVAX 400 mg vial x 1 x 16 ml"],
  ["BEVACIZUMAB","ZIRAVEB 100 mg/4 ml a.x 1"],
  ["BEVACIZUMAB","ZIRAVEB 400 mg/16 ml a.x 1"],
  ["BLEOMICINA","BLEOMICINA SULF IVAX 15 U FCO AMP"],
  ["BORTEZOMIB","BORATER 3.5 mg f.a.x 1"],
  ["BORTEZOMIB","BORTMEX 3.5 MG INY"],
  ["BORTEZOMIB","GYSATY 3.5 mg f.a.x 1"],
  ["BRENTUXIMAB VEDOTIN","ADCETRIS 50 MG FCO AMP"],
  ["BUSULFAN","BUSULFAN 60 mg f.a.x 8 x 10 ml"],
  ["CABAZITAXEl","BLACKXELL 60 MG F/A"],
  ["CABAZITAXEL","CABAZIL FA 1.5ML + DILUY"],
  ["CARBOPLATINO","CARBOPLATINO 150 MG KEMEX F.A"],
  ["CARBOPLATINO","CARBOPLATINO 150 MG MICROSULES F.A"],
  ["CARBOPLATINO","CARBOPLATINO 450 MG TEVA FCO AMP (TUTEUR)"],
  ["CARBOPLATINO","CARBOPLATINO GLENMARK 150 MG INY."],
  ["CARBOPLATINO","CARBOPLATINO GLENMARK 450 MG INY."],
  ["CARBOPLATINO","CARBOPLATINO 150MG TUTEUR LIOF"],
  ["CARBOPLATINO","CARBOPLATINO 450 MG KEMEX F.A"],
  ["CARBOPLATINO","CARBOPLATINO 450 MG MICROSULES F.A"],
  ["CARBOPLATINO","CARBOPLATINO LKM 150 MG"],
  ["CARFILZOMIB","ALCAF 60 MG"],
  ["CARFILZOMIB","CARFIZOL FAMP"],
  ["CARFILZOMIB","FILZOCAR 60 MG TUTEUR"],
  ["CETUXIMAB","ERBITUX X 1 VIAL X 100 ML"],
  ["CETUXIMAB","ERBITUX X 1 VIAL X 20 ML"],
  ["CICLOFOSFAMIDA","CICLOFOSFAMIDA 1 GR FAMP GP PHARM"],
  ["CICLOFOSFAMIDA","CICLOFOSFAMIDA 200 MG FA GPPHARM"],
  ["CICLOFOSFAMIDA","CICLOFOSFAMIDA LKM 1GR FA"],
  ["CICLOFOSFAMIDA","CICLOFOSFAMIDA MICROSULES 1GR"],
  ["CICLOFOSFAMIDA","CICLOFOSFAMIDA MICROSULES 200 MG"],
  ["CISPLATINO","CISPLATINO 10 MG FCO AMP TUTEUR"],
  ["CISPLATINO","CISPLATINO 50 MG FCO AMP TUTEUR"],
  ["CISPLATINO","CISPLATINO 50 MG KEMEX AMP"],
  ["CISPLATINO","CISPLATINO 50 MG MICROSULES AMP"],
  ["CITARABINA","CITARABINA MICROSULES 100 MG FA"],
  ["CITARABINA","CITARABINA MICROSULES 1000 MG FA"],
  ["DACARBAZINA","DACARBAZINA VARIFARMA 200 MG AMP."],
  ["DACARBAZINA","ONCOCARBIL 200 200 MG INY.LIOF.F.A.X 1"],
  ["DARATUMUMAB","DARZALEX 100 MG/5 ML x 1"],
  ["DARATUMUMAB","DARZALEX 400 MG/20 ML x 1"],
  ["DARATUMUMAB","DARZALEX SC 1800 MG/15 ML"],
  ["DECITABINA","SIGNUM 50 ML FCO.AMP x 1"],
  ["DECITABINE","DETAVI 50MG AMP"],
  ["DEGARELIX","FIRMAGON 120MG FA X 2"],
  ["DEGARELIX","FIRMAGON 80MG FA"],
  ["DENOSUMAB","PROLIA 60 MG/ML JGA PRELL"],
  ["DENOSUMAB","XGEVA 70MG/ML INY"],
  ["DOCETAXEL","DOCETAXEL 20 MG KEMEX FAMP"],
  ["DOCETAXEL","DOCETAXEL 20MG AMP MICROSULES"],
  ["DOCETAXEL","DOCETAXEL 80 MG AMP MICROSULES"],
  ["DOCETAXEL","DOCETAXEL 80 MG KEMEX FAMP"],
  ["DOSTARLIMAB","JEMPERLI 50MG x 10 ML"],
  ["DOXORUBICINA","DOXORUBICINA 10 MG MICROSULES AMP"],
  ["DOXORUBICINA","DOXORUBICINA 50 MG MICROSULES AMP"],
  ["DOXORUBICINA","DOXORUBICINA LIPOSOMAL 20 MG INY RAFFO"],
  ["DURVALUMAB","IMFINZI 120 MG VIAL X 2.4 ML x 1"],
  ["DURVALUMAB","IMFINZI 500 MG VIAL X 10 ML x 1"],
  ["EPIRUBICINA","EPIRUBICINA 50 MG IMA INY"],
  ["ERIBULINA MASILATO","ELEFIX VIAL X 1 X 2 ML"],
  ["ERITROPOYECTINA RECOMB.HUMAN","AHEMAX 10.000 UI FCO AMP"],
  ["ERITROPOYECTINA RECOMB.HUMAN","AHEMAX 40.000 UI FCO AMP"],
  ["ETOPOSIDO","ETOPOSIDO MICROSULES 100 MG INY.A.X 1 X 5 ML"],
  ["FILGRASTIM","FILGEN 300 MCG JGA.PRELL.X 5"],
  ["FILGRASTIM","NEUTROMAX 30 MUI (300 MCG) F.A.X 5"],
  ["FILGRASTIM","NEUTROMAX 48 MUI (480 MCG) AMP X 5"],
  ["FLUOROURACILO","FLUOROURACILO KEMEX 500 MG FCO AMP"],
  ["FLUOROURACILO","FLUOROURACILO MICROSULES 500MG INY"],
  ["FOSAPREPITANT DIMEGLUMINA","EMEND IV VIAL 150 MG"],
  ["GEMCITABINA","GEMCITABINA 1 GR GP PHARM F.AMP"],
  ["GEMCITABINA","GEMCITABINA 1 GR KEMEX F.AMP."],
  ["GEMCITABINA","GEMCITABINA 200 MG GP PHARM F.AMP."],
  ["GEMCITABINA","GEMCITABINA 200 MG KEMEX F.AMP."],
  ["GOSERELIN","ZOLADEX 3.6 MG INY"],
  ["GOSERELIN","ZOLADEX LA 10.8 MG INY"],
  ["HIERRO","FERINJECT INY"],
  ["IFOSFAMIDA","IFOSFAMIDA 1 GR MICROSULES"],
  ["IMATINIB","AGACEL 100 MG COMP x 180"],
  ["IMATINIB","AGACEL 400 MG COMP x 30"],
  ["IMATINIB","GLIVEC 100 MG COMP x 60"],
  ["IMATINIB","GLIVEC 400 MG COMP x 30"],
  ["IMATINIB","TIMAB 100 MG COMP x 180"],
  ["IMATINIB","TIMAB 400 MG COMP x 30"],
  ["INFLIXIMAB","IXIFI 100 MG AMP x 1"],
  ["INMUNOGLOBULINA HUMANA NORM","CAILELDOM 5 GR FA X 100 ML"],
  ["INMUNOGLOBULINA HUMANA NORM","PARLIVIGEN 10 GR FA 100 ML"],
  ["INMUNOGLOBULINA HUMANA NORM","PARLIVIGEN 5 GR FA 50 ML"],
  ["IPILIMUMAB","YERVOY 50 mg/10 ml vial x 1"],
  ["IRINOTECAN","IRINOTECAN GLENMARK 100 MG FA"],
  ["IRINOTECAN","IRINOTECAN KEMEX 100 MG FA"],
  ["IRINOTECAN","IRINOTECAN MICROSULES 100 MG FCOAMP"],
  ["ISATUXIMAB","SARCLISA (ISATUXIMAB 100 MG FCO AMP"],
  ["ISATUXIMAB","SARCLISA (ISATUXIMAB 500 MG FCO AMP"],
  ["LEUCOVORINA","LEUCOCALCIN 15 MG COMP"],
  ["LEUCOVORINA CALCICA","LEUCOVORINA 50 MG TUTEUR AMP"],
  ["LIPEGFILGRASTIM","LONQUEX 6 MG JGA PRELL X 1"],
  ["MELFALANO INYECTABLE IM","MELFALAN FRIMIRT 50 MG IV"],
  ["MEPREDNISONA","DELTISONA B 40 MG COMP.X 20"],
  ["METOTREXATO","METOTREXATO 1000 MG FAMP MICROSULES"],
  ["METOTREXATO","METOTREXATO 50 MG FAMP MICROSULES"],
  ["METOTREXATO","METOTREXATO 500 MG FAMP MICROSULES"],
  ["MITOMICINA","MITOMICINA C 20 MG F AMP MICROSULES"],
  ["NATALIZUMAB","TYSABRI 150 MG/ML JER.PRELL. X 2"],
  ["NATALIZUMAB","TYSABRI 300 mg/15 ml vial x 1"],
  ["NETUPITANT","AKYNZEO"],
  ["NIVOLUMAB","OPDIVIO 100 mg/10 ml vial x 1"],
  ["NIVOLUMAB","OPDIVIO 40 mg/4 ml vial x 1"],
  ["NIVOLUMAB","OPDIVO 240MG/24ML"],
  ["OBINUTUZUMAB","GAZYVA 1000 MG / 40 ML VIAL"],
  ["OCRELIZUMAB","OCREVUS 300 mg/10 ml vial x 1"],
  ["OCTREOTTIDA","SANDOSTATIN LAR 20 MG JGA PRE x 1"],
  ["OCTREOTTIDA","SANDOSTATIN LAR 30 MG JGA PRE x 1"],
  ["OMALIZUMAB","XOLAIR 150 MG FAMP X 1"],
  ["OMALIZUMAB","XOLAIR 150 MG JGA PRELL X 1"],
  ["ONDANSETRON","ONDANSETRON FRESENIUS 8 MG AMPOLLAS"],
  ["ONDANSETRON","ONDANSETRON LKM 8 8 MG COMP.X 10"],
  ["OXALIPLATINO","OXALIPLATINO KEMEX100MG INY"],
  ["OXALIPLATINO","OXALIPLATINO MICROSULES 100MG INY"],
  ["OXALIPLATINO","OXALIPLATINO 50 MG KEMEX INY"],
  ["OXALIPLATINO","OXALIPLATINO MICROSULES 50MG INY"],
  ["OXALIPLATINO","PACLITAXEL KEMEX 30 MG"],
  ["PACLITAXEL","PACLITAXEL KEMEX 100 MG"],
  ["PACLITAXEL","PACLITAXEL KEMEX 150 MG"],
  ["PACLITAXEL ALBUMINA","TAYCOVIT A"],
  ["PACLITAXEL + ALBUMINA","ABRAXANE 100MG INY"],
  ["PAMIDRONATO DISODICO","AMINOMUX 30 MG INY.LIOF.F.A.X 1"],
  ["PAMIDRONATO DISODICO","AMINOMUX 90 MG INY.LIOF.F.A.X 1"],
  ["PANITUMUMAB INYECTABLE IV","VECTIBIX 100 MG X 5ML"],
  ["PEGASPARGASA","ONCASPAR PVO.P/SOL.INY.VIAL X 1"],
  ["PEGFILGRASTIM","PEG NEUTROPINE PA 6MG JGA.PRELL.X1+PROT.A."],
  ["PEMBROLIZUMAB","KEYTRUDA ENVASE 100 MG VIAL X 2"],
  ["PEMETREXED","PEMETREXED 500 GP FARM"],
  ["PEMETREXED","PEMETREXED 500 KEMEX FCO AMP"],
  ["PERTUZUMAB","PERJETA 420 mg/14 ml a.x 1"],
  ["PERTUZUMAB + TRASTUZUMAB SC","PERJETA - HERCEPTIN IV COMBO PACK Kit Inyectable"],
  ["PERTUZUMAB + TRASTUZUMAB SC","PHESGO 1200/600MG VIAL X1 X15ML"],
  ["PERTUZUMAB + TRASTUZUMAB SC","PHESGO 600/600 VIAL X 10 ML"],
  ["PLERIZAFOR","REVIXIL 20 MG X 1"],
  ["RAMUCIRUMAB","CYRAMZA 500 MG 10 MG/ML F.A.X 1 X 50 ML"],
  ["RANIBIZUMAB","LUCENTIS 1VIAL X 0,23 ML"],
  ["RITUXIMAB SC","MABTHERA SC 1400 mg/11.7 ml vial x 1"],
  ["RITUXIMAB IV","NOVEX 100 MG VIAL ENV X 1 AMP"],
  ["RITUXIMAB IV","NOVEX 500 MG VIAL x 1"],
  ["RITUXIMAB IV","RUXIENCE 100 mg/10 ml f.a x 2"],
  ["RITUXIMAB IV","RUXIENCE 500 MG VIAL"],
  ["RITUXIMAB IV","TRUXIMA 100 mg/10 ml f.a x 2"],
  ["RITUXIMAB IV","TRUXIMA 500 mg/50 ml f.a x 1"],
  ["SECUKINUMAB","COSENTYX 150MG / 1ML AUTOINY X 1"],
  ["SECUKINUMAB","COSENTYX 300MG / 2ML AUTOINY X 1"],
  ["SOMATOTROFINA","NORDITROPIN FLEXPRO 15 MG X 1"],
  ["TOXINA BOTULINICA","TOXINA BOTULINICA (BOTOX) 100UI AMP"],
  ["TRABECTEDINA","YONDELIS 1 MG FCO AMP"],
  ["TRASTUZUMAB","HERCEPTIN 440 MG X 50 ML AMP"],
  ["TRASTUZUMAB","HERCEPTIN SC 600 mg/5 ml vial x 1"],
  ["TRASTUZUMAB","TRAZIMERA 440 mg f.a. x 1+ solv."],
  ["TRASTUZUMAB","TUZEPTA 440 mg f.a. x 1+ solv."],
  ["TRASTUZUMAB EMTANSINA","KADCYLA 100 MG X 1 VIAL x 1"],
  ["TRASTUZUMAB EMTANSINA","KADCYLA 160 MG X 1 VIAL x 1"],
  ["TRIPTORELINA","DECAPEPTYL RETARD IM 3.75 MG KIT"],
  ["TRIPTORELINA","DECAPEPTYL RETARD IM 11.25 MG KIT"],
  ["USTEKINUMAB","STELARA 90 MG/1 ML VIAL+J.PRELL"],
  ["USTEKINUMAB","STELARA IV 130MG/26ML VIAL"],
  ["VEDOLIZUMAB","ENTYVIO 300 MG VIAL"],
  ["VEDOLIZUMAB","ENTYVIO SC JGA PRELL"],
  ["VINBLASTINA","VINBLASTINA KEMEX 10MG x 1"],
  ["VINCRISTINA","VINCRISTINA KEMEX 1 MG INY.A.X 1"],
  ["VINCRISTINA","VINCRISTINA LKM 1 1 MG INY.A.X 1"],
  ["VINORELBINE","VINORELBINE 10 MG FCO AMP VINOREL"],
  ["ANFOTERICINA B","ANFOTERICNA B FADA AMP"],
  ["ANFOTERICINA B","ANFOTERICINA RICHET INY"],
  ["ANFOTERICINA B","ANFOTERICINA NORTHIA AMP"],
  ["POSACONAZOL","NAXOFIL SUSP. ORAL X 105 ML"],
  ["POSACONAZOL","NAXOFIL 100 MG COMP"],
  ["POSACONAZOL","NAXOFIL 100 MG COMP X 24"],
  ["VORICONAZOL","V FEND 200 MG AMP PFIZER"],
  ["VORICONAZOL","200 MG COMP SANDOZ"],
  ["VORICONAZOL","200 MG IV F AMP SANDOZ"],
  ["VORICONAZOL","200 MG COMP RICHET"],
  ["VORICONAZOL","200 MG IV F AMP RICHET"],
  ["VORICONAZOL","200 MG COMP X 10 RICHET"],
  ["PIPERACILINA+TAZOBACTAM","PIPERACILINA+TAZOBACTAM 4,5 FADA"],
  ["PIPERACILINA+TAZOBACTAM","PIPERACILINA+TAZOBACTAM 4,5 RICHET"],
  ["PIPERACILINA+TAZOBACTAM","PIPERACILINA+TAZOBACTAM 4,5 NORTHIA"],
  ["PIPERACILINA+TAZOBACTAM","PIPERACILINA+TAZOBACTAM 4,5 KILAB"],
  ["PIPERACILINA+TAZOBACTAM","PIPERACILINA+TAZOBACTAM 4,5 DRAWER"],
  ["PIPERACILINA+TAZOBACTAM","PIPERACILINA+TAZOBACTAM 4,5 BAGO"],
  ["PIPERACILINA+TAZOBACTAM","PETEZAM 4,5 RIVERO"],
  ["PIPERACILINA+TAZOBACTAM","PIPERAC CAMPUESTO 4,5 KLONAL"],
  ["PIPERACILINA+TAZOBACTAM","PIPERACILINA+TAZOBACTAM 4,5 FABRA"],
  ["VANCOMICINA","VANCOMICINA 500 MG KLONAL FCO AMP"],
  ["VANCOMICINA","VANCOMICINA 500 MG FADA FCO AMP"],
  ["VANCOMICINA","VANCOMICINA 500 MG DRAWER FCO AMP"],
  ["VANCOMICINA","VANCOMICINA 500 MG RICHET FCO AMP"],
  ["VANCOMICINA","VANCOMICINA 500 MG FABRA FCO AMP"],
  ["VANCOMICINA","VANCOMICINA 500 MG NORTHIA FCO AMP"],
  ["VANCOMICINA","VANCOMICINA 500 MG RIVERO FCO AMP"],
  ["VANCOMICINA","VANCOMICINA 500 MG CELTYC FCO AMP"],
  ["VANCOMICINA","VANCOMICINA SOL ORAL 25MG/MLX X 140 ML"],
  ["VANCOMICINA","VANCOMICINA SOL ORAL 125MG/5MLX X 140 ML"],
  ["CEFTAZIDIMA+AVIBACTAM","ZAVICEFTA 2GR / 0,5G FCO AMP"],
  ["CEFTAZIDIMA+AVIBACTAM","CEFTAAVI 2G FRASCO AMP"],
  ["MEROPENEM","MEROPENEM 1 GR NORTHIA INY"],
  ["MEROPENEM","MEROPENEM 1 GR FABRA INY"],
  ["MEROPENEM","MEROPENEM 1 GR FADA INY"],
  ["MEROPENEM","KLOPENEM 1 GR KLONAL INY"],
  ["MEROPENEM","MEROPENEM 1 GR RICHET AMP"],
  ["MEROPENEM","MEROPENEM 1 GR DRAWER INY"],
  ["MEROPENEM","MEROPENEM 1GR CELTYC INY"],
  ["ANIDULAFUNGINA","ANIDULAFUNGINA ECALTA 100 MG FCO AMP"],
  ["IMEPENEM+CILASTATINA+RELEBA CTAM","RECARBRIO F/A"]
].map(([droga, medicamento]) => ({
  financiador: "OMINT",
  droga,
  medicamento,
  auditoria: "No informado"
})));

MEDICAMENTOS.push(...[
  ["ACETATO DE LEUPROLIDE","ELIGARD 22.5 MG KIT"],
  ["ACETATO DE LEUPROLIDE","ELIGARD 45 MG KIT X 1"],
  ["ACETATO DE LEUPROLIDE","LECTRUM 22,5 ML KIT"],
  ["ACETATO DE LEUPROLIDE","LECTRUM 3.75 MG KIT"],
  ["ACETATO DE LEUPROLIDE","LECTRUM 7.5 MG KIT"],
  ["ACIDO ZOLEDRONICO","ACIDO ZOLEDR.MICROSULES 4 MG AMP"],
  ["ADALIMUMAB","AMGEVITA 40MG/0.8ML AUTOINY X 2"],
  ["ADALIMUMAB","HUMIRA AC LAP AUTOINY 0.4ML X 2"],
  ["ADALIMUMAB","HUMIRA AC LAP AUTOINY 0.8ML X 1"],
  ["APREPITANT","EMEND TRIPACK CAPS.X 1+CAPS.X2"],
  ["ATEZOLIZUMAB","TECENTRIQ 1200mg vial x 1 x 20 ml"],
  ["ATEZOLIZUMAB","TECENTRIQ 840 mg vial x 1 x 14 ml"],
  ["AZACITIDINA","AZAMEX 100 mg f.a.x 1"],
  ["AZACITIDINA","AZZA 100 mg iny.liof.f.a.x 1"],
  ["AZACITIDINA","AZACITIDINA LKM 100 MG AMP"],
  ["BACILO DE CALMETTE GUERIN","BCG CULTIVO SSI FCO AMP X 4"],
  ["BACILO DE CALMETTE GUERIN","CARCIVAC FCO AMP"],
  ["BELATACEPT","NULOJIX 250mg/vial pvo.liof.x 1"],
  ["BENDAMUSTINA","BENDAMUSTINA KEMEX 100 MG FAMP"],
  ["BENDAMUSTINA","BENDAMUSTINA MICROSULES 100 MG FAMP"],
  ["BENDAMUSTINA","BENDAMUSTINA MICROSULES 25 MG FAMP"],
  ["BENDAMUSTINA","BENDAMUSTINA VARIFARMA 100 MG FAMP"],
  ["BENDAMUSTINA","BENDAMUSTINA VARIFARMA 25 MG FAMP"],
  ["BEVACIZUMAB","AVASTIN 100 MG/4 ML AMP"],
  ["BEVACIZUMAB","AVASTIN 400 MG/16 ML AMP"],
  ["BEVACIZUMAB","BEVAX 100 mg vial x 1 x 4 ml"],
  ["BEVACIZUMAB","BEVAX 400 mg vial x 1 x 16 ml"],
  ["BEVACIZUMAB","ZIRAVEB 100 mg/4 ml a.x 1"],
  ["BEVACIZUMAB","ZIRAVEB 400 mg/16 ml a.x 1"],
  ["BLEOMICINA","BLEOMICINA SULF IVAX 15 U FCO AMP"],
  ["BORTEZOMIB","BORATER 3.5 mg f.a.x 1"],
  ["BORTEZOMIB","BORTMEX 3.5 MG INY"],
  ["BORTEZOMIB","GYSATY 3.5 mg f.a.x 1"],
  ["BRENTUXIMAB VEDOTIN","ADCETRIS 50 MG FCO AMP"],
  ["BUSULFAN","BUSULFAN 60 mg f.a.x 8 x 10 ml"],
  ["CABAZITAXEL","BLACKXELL 60 MG F/A"],
  ["CABAZITAXEL","CABAZIL FA 1.5ML + DILUY"],
  ["CARBOPLATINO","CARBOPLATINO 150 MG KEMEX F.A"],
  ["CARBOPLATINO","CARBOPLATINO 150 MG MICROSULES F.A"],
  ["CARBOPLATINO","CARBOPLATINO 450 MG TEVA FCO AMP (TUTEUR)"],
  ["CARBOPLATINO","CARBOPLATINO GLENMARK 150 MG INY."],
  ["CARBOPLATINO","CARBOPLATINO GLENMARK 450 MG INY."],
  ["CARBOPLATINO","CARBOPLATINO 150MG TUTEUR LIOF"],
  ["CARBOPLATINO","CARBOPLATINO 450 MG KEMEX F.A"],
  ["CARBOPLATINO","CARBOPLATINO 450 MG MICROSULES F.A"],
  ["CARBOPLATINO","CARBOPLATINO LKM 150 MG"],
  ["CARFILZOMIB","ALCAF 60 MG"],
  ["CARFILZOMIB","CARFIZOL FAMP"],
  ["CARFILZOMIB","FILZOCAR 60 MG TUTEUR"],
  ["CETUXIMAB","ERBITUX X 1 VIAL X 100 ML"],
  ["CETUXIMAB","ERBITUX X 1 VIAL X 20 ML"],
  ["CICLOFOSFAMIDA","CICLOFOSFAMIDA 1 GR FAMP GP PHARM"],
  ["CICLOFOSFAMIDA","CICLOFOSFAMIDA 200 MG FA GPPHARM"],
  ["CICLOFOSFAMIDA","CICLOFOSFAMIDA LKM 1GR FA"],
  ["CICLOFOSFAMIDA","CICLOFOSFAMIDA MICROSULES 1GR"],
  ["CICLOFOSFAMIDA","CICLOFOSFAMIDA MICROSULES 200 MG"],
  ["CISPLATINO","CISPLATINO 10 MG FCO AMP TUTEUR"],
  ["CISPLATINO","CISPLATINO 50 MG FCO AMP TUTEUR"],
  ["CISPLATINO","CISPLATINO 50 MG KEMEX AMP"],
  ["CISPLATINO","CISPLATINO 50 MG MICROSULES AMP"],
  ["CITARABINA","CITARABINA MICROSULES 100 MG FA"],
  ["CITARABINA","CITARABINA MICROSULES 1000 MG FA"],
  ["DACARBAZINA","DACARBAZINA VARIFARMA 200 MG AMP."],
  ["DACARBAZINA","ONCOCARBIL 200 200 MG INY.LIOF.F.A.X 1"],
  ["DARATUMUMAB","DARZALEX 100 MG/5 ML x 1"],
  ["DARATUMUMAB","DARZALEX 400 MG/20 ML x 1"],
  ["DARATUMUMAB","DARZALEX SC 1800 MG/15 ML"],
  ["DECITABINA","SIGNUM 50 ML FCO.AMP x 1"],
  ["DECITABINE","DETAVI 50MG AMP"],
  ["DEGARELIX","FIRMAGON 120MG FA X 2"],
  ["DEGARELIX","FIRMAGON 80MG FA"],
  ["DENOSUMAB","PROLIA 60 MG/ML JGA PRELL"],
  ["DENOSUMAB","XGEVA 70MG/ML INY"],
  ["DOCETAXEL","DOCETAXEL 20 MG KEMEX FAMP"],
  ["DOCETAXEL","DOCETAXEL 20MG AMP MICROSULES"],
  ["DOCETAXEL","DOCETAXEL 80 MG AMP MICROSULES"],
  ["DOCETAXEL","DOCETAXEL 80 MG KEMEX FAMP"],
  ["DOSTARLIMAB","JEMPERLI 50MG x 10 ML"],
  ["DOSTARLIMAB","JEMPERLI 50MG x 10ML"],
  ["DOXORUBICINA","DOXORUBICINA 10 MG MICROSULES AMP"],
  ["DOXORUBICINA","DOXORUBICINA 50 MG MICROSULES AMP"],
  ["DOXORUBICINA","DOXORUBICINA LIPOSOMAL 20 MG INY RAFFO"],
  ["DURVALUMAB","IMFINZI 120 MG VIAL X 2.4 ML x 1"],
  ["DURVALUMAB","IMFINZI 500 MG VIAL X 10 ML x 1"],
  ["EPIRUBICINA","EPIRUBICINA 50 MG IMA INY"],
  ["ERIBULINA MASILATO","ELEFIX VIAL X 1 X 2 ML"],
  ["ERITROPOYECTINA RECOMB.HUMANA","HEMAX 10.000 UI FCO AMP"],
  ["ETOPOSIDO","ETOPOSIDO MICROSULES 100 MG INY.A.X 1 X 5 ML"],
  ["FILGRASTIM","FILGEN 300 MCG JGA.PRELL.X 5"],
  ["FILGRASTIM","NEUTROMAX 30 MUI (300 MCG) F.A.X 5"],
  ["FILGRASTIM","NEUTROMAX 48 MUI (480 MCG) AMP X 5"],
  ["FLUOROURACILO","FLUOROURACILO KEMEX 500 MG FCO AMP"],
  ["FLUOROURACILO","FLUOROURACILO MICROSULES 500MG INY"],
  ["FOSAPREPITANT DIMEGLUMINA","EMEND IV VIAL 150 MG"],
  ["GEMCITABINA","GEMCITABINA 1 GR GP PHARM F.AMP"],
  ["GEMCITABINA","GEMCITABINA 1 GR KEMEX F.AMP."],
  ["GEMCITABINA","GEMCITABINA 200 MG GP PHARM F.AMP."],
  ["GEMCITABINA","GEMCITABINA 200 MG KEMEX F.AMP."],
  ["GOSERELIN","ZOLADEX 3.6 MG INY"],
  ["GOSERELIN","ZOLADEX LA 10.8 MG INY"],
  ["HIERRO","FERINJECT INY"],
  ["IFOSFAMIDA","IFOSFAMIDA 1 GR MICROSULES"],
  ["IMATINIB","AGACEL 100 MG COMP x 180"],
  ["IMATINIB","AGACEL 100 MG COMP x 180"],
  ["IMATINIB","AGACEL 400 MG COMP x 30"],
  ["IMATINIB","AGACEL 400 MG COMP x 30"],
  ["IMATINIB","GLIVEC 100 MG COMP x 60"],
  ["IMATINIB","GLIVEC 100 MG COMP x 60"],
  ["IMATINIB","GLIVEC 400 MG COMP x 30"],
  ["IMATINIB","GLIVEC 400 MG COMP x 30"],
  ["IMATINIB","TIMAB 100 MG COMP x 180"],
  ["IMATINIB","TIMAB 100 MG COMP x 180"],
  ["IMATINIB","TIMAB 400 MG COMP x 30"],
  ["IMATINIB","TIMAB 400 MG COMP x 30"],
  ["INFLIXIMAB","IXIFI 100 MG AMP x 1"],
  ["INMUNOGLOBULINA HUMANA NORMAL","CIELDOM 5 GR FA X 100 ML"],
  ["INMUNOGLOBULINA HUMANA NORMAL","PRIVIGEN 10 GR FA 100 ML"],
  ["INMUNOGLOBULINA HUMANA NORMAL","PRIVIGEN 5 GR FA 50 ML"],
  ["IPILIMUMAB","YERVOY 50 mg/10 ml vial x 1"],
  ["IRINOTECAN","IRINOTECAN GLENMARK 100 MG FA"],
  ["IRINOTECAN","IRINOTECAN KEMEX 100 MG FA"],
  ["IRINOTECAN","IRINOTECAN MICROSULES 100 MG FCOAMP"],
  ["ISATUXIMAB","SARCLISA (ISATUXIMAB 100 MG FCO AMP"],
  ["ISATUXIMAB","SARCLISA (ISATUXIMAB 500 MG FCO AMP"],
  ["LEUCOVORINA","LEUCOCALCIN 15 MG COMP"],
  ["LEUCOVORINA CALCICA","LEUCOVORINA 50 MG TUTEUR AMP"],
  ["LIPEGFILGRASTIM","LONQUEX 6 MG JGA PRELL X 1"],
  ["MELFALANO INYECTABLE IM","MELFALAN FRIMIRT 50 MG IV"],
  ["MEPREDNISONA","DELTISONA B 40 MG COMP.X 20"],
  ["METOTREXATO","METOTREXATO 1000 MG FAMP MICROSULES"],
  ["METOTREXATO","METOTREXATO 50 MG FAMP MICROSULES"],
  ["METOTREXATO","METOTREXATO 500 MG FAMP MICROSULES"],
  ["MITOMICINA","MITOMICINA C 20 MG F AMP MICROSULES"],
  ["NATALIZUMAB","TYSABRI 150 MG/ML JER.PRELL. X 2"],
  ["NATALIZUMAB","TYSABRI 300 mg/15 ml vial x 1"],
  ["NETUPITANT","AKYNZEO"],
  ["NIVOLUMAB","OPDIVIO 100 mg/10 ml vial x 1"],
  ["NIVOLUMAB","OPDIVIO 40 mg/4 ml vial x 1"],
  ["NIVOLUMAB","OPDIVO 240MG/24ML"],
  ["OBINUTUZUMAB","GAZYVA 1000 MG / 40 ML VIAL"],
  ["OCRELIZUMAB","OCREVUS 300 mg/10 ml vial x 1"],
  ["OCTREOTTIDA","SANDOSTATIN LAR 20 MG JGA PRE x 1"],
  ["OCTREOTTIDA","SANDOSTATIN LAR 30 MG JGA PRE x 1"],
  ["OMALIZUMAB","XOLAIR 150 MG FAMP X 1"],
  ["OMALIZUMAB","XOLAIR 150 MG JGA PRELL X 1"],
  ["ONDANSETRON","ONDANSETRON FRESENIUS 8 MG AMPOLLAS"],
  ["ONDANSETRON","ONDANSETRON LKM 8 8 MG COMP.X 10"],
  ["OXALIPLATINO","OXALIPLATINO KEMEX100MG INY"],
  ["OXALIPLATINO","OXALIPLATINO MICROSULES 100MG INY"],
  ["OXALIPLATINO","OXALIPLATINO 50 MG KEMEX INY"],
  ["OXALIPLATINO","OXALIPLATINO MICROSULES 50MG INY"],
  ["OXALIPLATINO","PACLITAXEL KEMEX 30 MG"],
  ["PACLITAXEL","PACLITAXEL KEMEX 100 MG"],
  ["PACLITAXEL","PACLITAXEL KEMEX 150 MG"],
  ["PACLITAXEL ALBUMINA","TAYCOVIT A"],
  ["PACLITAXEL + ALBUMINA","ABRAXANE 100MG INY"],
  ["PAMIDRONATO DISODICO","AMINOMUX 30 MG INY.LIOF.F.A.X 1"],
  ["PAMIDRONATO DISODICO","AMINOMUX 90 MG INY.LIOF.F.A.X 1"],
  ["PANITUMUMAB INYECTABLE IV","VECTIBIX 100 MG X 5ML"],
  ["PEGASPARGASA","ONCASPAR PVO.P/SOL.INY.VIAL X 1"],
  ["PEGFILGRASTIM","PEG NEUTROPINE PA 6MG JGA.PRELL.X1+PROT.A."],
  ["PEMBROLIZUMAB","KEYTRUDA ENVASE 100 MG VIAL X 2"],
  ["PEMETREXED","PEMETREXED 500 GP FARM"],
  ["PEMETREXED","PEMETREXED 500 KEMEX FCO AMP"],
  ["PERTUZUMAB","PERJETA 420 mg/14 ml a.x 1"],
  ["PERTUZUMAB + TRASTUZUMAB SC","PERJETA - HERCEPTIN IV COMBO PACK Kit Inyectable"],
  ["PERTUZUMAB + TRASTUZUMAB SC","PHESGO 1200/600MG VIAL X1 X15ML"],
  ["PERTUZUMAB + TRASTUZUMAB SC","PHESGO 600/600 VIAL X 10 ML"],
  ["PLERIZAFOR","REVIXIL 20 MG X 1"],
  ["PLERIZAFOR","REVIXIL 20 MG X 1"],
  ["RAMUCIRUMAB","CYRAMZA 500 MG 10 MG/ML F.A.X 1 X 50 ML"],
  ["RITUXIMAB SC","MABTHERA SC 1400 mg/11.7 ml vial x 1"],
  ["RITUXIMAB IV","NOVEX 100 MG VIAL ENV X 1 AMP"],
  ["RITUXIMAB IV","NOVEX 500 MG VIAL x 1"],
  ["RITUXIMAB IV","RUXIENCE 100 mg/10 ml f.a x 2"],
  ["RITUXIMAB IV","RUXIENCE 500 MG VIAL"],
  ["RITUXIMAB IV","TRUXIMA 100 mg/10 ml f.a x 2"],
  ["RITUXIMAB IV","TRUXIMA 500 mg/50 ml f.a x 1"],
  ["SECUKINUMAB","COSENTYX 150MG / 1ML AUTOINY X 1"],
  ["SECUKINUMAB","COSENTYX 300MG / 2ML AUTOINY X 1"],
  ["SOMATOTROFINA","NORDITROPIN FLEXPRO 15 MG X 1"],
  ["TOXINA BOTULINICA","TOXINA BOTULINICA (BOTOX) 100UI AMP"],
  ["TRABECTEDINA","YONDELIS 1 MG FCO AMP"],
  ["TRASTUZUMAB","HERCEPTIN 440 MG X 50 ML AMP"],
  ["TRASTUZUMAB","HERCEPTIN SC 600 mg/5 ml vial x 1"],
  ["TRASTUZUMAB","TRAZIMERA 440 mg f.a. x 1+ solv."],
  ["TRASTUZUMAB","TUZEPTA 440 mg f.a. x 1+ solv."],
  ["TRASTUZUMAB EMTANSINA","KADCYLA 100 MG X 1 VIAL x 1"],
  ["TRASTUZUMAB EMTANSINA","KADCYLA 160 MG X 1 VIAL x 1"],
  ["TRIPTORELINA","DECAPEPTYL RETARD IM 3.75 MG KIT"],
  ["TRIPTORELINA","DECAPEPTYL RETARD IM 11.25 MG KIT"],
  ["USTEKINUMAB","STELARA 90 MG/1 ML VIAL+J.PRELL"],
  ["USTEKINUMAB","STELARA IV 130MG/26ML VIAL"],
  ["VEDOLIZUMAB","ENTYVIO 300 MG VIAL"],
  ["VEDOLIZUMAB","ENTYVIO SC JGA PRELL"],
  ["VINBLASTINA","VINBLASTINA KEMEX 10MG x 1"],
  ["VINBLASTINA","VINBLASTINA KEMEX 10MG x 1"],
  ["VINCRISTINA","VINCRISTINA KEMEX 1 MG INY.A.X 1"],
  ["VINCRISTINA","VINCRISTINA LKM 1 1 MG INY.A.X 1"],
  ["VINORELBINE","VINORELBINE 10 MG FCO AMP VINOREL"],
  ["ONDANSETRON","ONDANSETRON FABRA 8 MG AMPOLLAS"],
  ["ZAVICEFTA","ZAVICEFTA 2G / 0.5 FCO AMP"]
].map(([droga, medicamento]) => ({
  financiador: "REDBRIDGE",
  droga,
  medicamento,
  auditoria: "No informado"
})));

MEDICAMENTOS.push(...[
  ["ANFOTERICINA LIPOSOMAL 50 MG FCO AMP","AMBISOME 50 MG FCO AMP"],
  ["ANIDULAFUNGINA E","ANIDULAFUNGINA ECALTA 100MG FCO AMP"],
  ["AZTREONAM 1 MG FCO AMP","AZTREONAM 1 GR FCO AMP + SVE"],
  ["BICNU (CARMUSTINE) INY 100 MG","BODACLER 100 MG FAMP"],
  ["BUSULFAN 60 MG AMP","BUSULTEK 60MG (ENV X 8)"],
  ["CICLOFOSFAMIDA INYECTABLE IV 1000 MG","CICLOFOSFAMIDA MICROSULES 1GR"],
  ["CICLOFOSFAMIDA INYECTABLE IV 1000 MG","CICLOFOSFAMIDA KEMEX 1000 MG"],
  ["CICLOFOSFAMIDA INYECTABLE IV 1000 MG","CICLOFOSFAMIDA LKM 1GR FA"],
  ["CICLOFOSFAMIDA INYECTABLE IV 200 MG","CICLOFOSFAMIDA KEMEX 200 MG"],
  ["CICLOFOSFAMIDA INYECTABLE IV 200 MG","CICLOFOSFAMIDA MICROSULES 200 MG"],
  ["CICLOSPORINA INYECTABLE IV 50 MG/ML","SANDIMMUN 50 MG IV AMP"],
  ["CITARABINA INYECTABLE IV 100 MG","CITARABINA MICROSULES 100 MG FA"],
  ["DAPTOMICINA","CUBICIN RT 500MG INY"],
  ["ETOPOSIDO","ETOPOSIDO MICROSULES 100MG INY"],
  ["FILGASTRIM","NEUTROMAX 30 MUI (300 MCG) AMP"],
  ["FILGASTRIM","NEUTROMAX 48 MUI (480 MCG) AMP"],
  ["FLUCONAZOL RICHET 200 MG COMP","FLUCONAZOL RICHET 200 MG COMP"],
  ["FLUDARABINA MICROSULES 50 MG INY","FLUDARABINA INYECTABLE IV 50 MG"],
  ["FOSCARNET 500 ML AMPOLLA","FOSCARNET 24 MG/ML X 500 ML RICHET"],
  ["GANCICLOVIR 500 MG FCO AMP","GANCICLOVIR RICHET 500 MG INY"],
  ["HAEMOCOMPLETTAN P 1G FCO AMP","HAEMOCOMPLETTAN P 1G FCO AMP"],
  ["ALBUMINA HUMANA INYECTABLE IV 20 %","ALBUMINA HUMANA 20% GRIFOLS"],
  ["INMUNOGLOBULINA HUMANA INYECTABLE IV -- 5GR","PRIVIGEN 5 GR FA 50 ML"],
  ["ISAVUCONAZOL","CRESEMBA 100 MG CAPS"],
  ["MELFALANO INYECTABLE IM","MELFALAN FRIMIRT 50 MG IV"],
  ["MEROPENEM INYECTABLE IV 1000 MG","MEROPENEM 1 GR FABRA INY"],
  ["MEROPENEM INYECTABLE IV 1000 MG","MEROPENEM 1 GR RICHET INY X1"],
  ["MESNA 200 MG VARIFARMA INY","MESNA INYECTABLE IV 200 MG"],
  ["METILPREDNIS KLONAL 500 MG FCO AMP","METILPREDNISOLONA INYECTABLE IV 500 MG"],
  ["MICOFENOLATO SODICO 360MG","MYFORTIC 360 MG COMP"],
  ["MOFETIL 500MG COMP","SUPRIMUN 500 MG COMPR X 50"],
  ["NOVOSEVEN","NOVOSEVEN MIXPRO 1 MG JER PRELL"],
  ["PIPERACILINA+TAZOBACTAM 4.5 PHARMAV","PIPERACILINA+TAZOBACTAM 4.5 PHARMAV"],
  ["PLERIXAFOR 20 MG FCO AMP","REVIXIL 20 MG / 1 ML"],
  ["TACROLIMUS ORAL 1 MG","PROGRAF 1 MG CAPS"],
  ["PROTROMPLEX","PROTROMPLEX TOTAL TIM 4 X 600 U.I."],
  ["RITUXIMAB 100MG VIAL","NOVEX 100 MG VIAL ENV X 2 AMP"],
  ["RITUXIMAB 500MG VIAL","NOVEX 500 MG VIAL"],
  ["BASILIXIMAB INYECTABLE IV 20 MG","SIMULECT 20 MG FCO.AMP."],
  ["SIROLIMUS ORAL 0.5 MG","RAPAMUNE 0.5 MG COMP"],
  ["SIROLIMUS ORAL 1 MG","RAPAMUNE 1 MG COMP"],
  ["TACROLIMUS","PROGRAF 5 MG INY"],
  ["TEICOPLANINA INYECTABLE IM/IV 400 MG","TEICOPLANINA 400 MG RICHET AMP"],
  ["TIOTEPA 100 MG AMP","TEPADINA 100 MG FAMP"],
  ["SUERO ANTITIMOCITARIO INYECTABLE IV 25 MG","TIMOGLOBULINA 25 MG FCO AM"],
  ["VALGARD 450 COMP","VALGARD COMP"],
  ["VORICONAZOL ORAL 200 MG","V-FEND 200 MG COMP"],
  ["ZAVICEFTA","ZAVICEFTA 2G / 0.5G FCO AMP"],
  ["CEFEPIME INYECTABLE IM/IV 2000 MG","CEFEPIME 1 GR PHARMAVIAL INY"],
  ["CITARABINA INYECTABLE IV 1000 MG","CITARABINA MICROSULES 1000MG FA"],
  ["CITARABINA INYECTABLE IV 100 MG","CITARABINA MICROSULES 100 MG FA"],
  ["LETERMOVIR ORAL 240 MG","PREVYMIS 240 MG COMP X28"],
  ["RUXOLITINIB ORAL 10 MG","JAKAVI 10 MG COMP. X 60"]
].map(([droga, medicamento]) => ({
  financiador: "INSSSEP Chaco",
  categoria: "Trasplante",
  droga,
  medicamento,
  auditoria: "No informado"
})));

MEDICAMENTOS.push(...[
  ["ACTIVADOR TISULAR PLASMINÓGENO","ACTILYSE 50 MG INY.F.A.X 2","No informado"],
  ["ALBÚMINA HUMANA","ZENALB 20 20% FCO.X 50 ML","No informado"],
  ["ALBÚMINA HUMANA","ALBUMINA SERICA 20% INY.X 10 ML","No informado"],
  ["ALBÚMINA HUMANA","ALBUMINA SERICA 20% INY.X 20 ML","No informado"],
  ["ALBÚMINA HUMANA","ALBUMINA SERICA 20% INY.X 50ML C/EQ.PERF","No informado"],
  ["ALBÚMINA HUMANA","UMAN ALBUMIN 20% VIAL X 50 ML","No informado"],
  ["ALBÚMINA HUMANA","ALBUNORM F.A. X 50 ML","No informado"],
  ["ALBÚMINA HUMANA","ALBUTEIN 20% F.A.X 1 X 50 ML","No informado"],
  ["ALBÚMINA HUMANA","ALBUREX F.A.X 1 X 50 ML","No informado"],
  ["ALPROSTADIL","ALPROSTADIL RICHET 0.5 MG/ML A.X 1","No informado"],
  ["ALPROSTADIL","ALPROSTADIL GRAY 500 MCG/ML A.X 1 X 1 ML","Sí"],
  ["ANFOTERICINA B COMPLEJO LIPÍDICO","ABELCET 100 MG F.A.X 20 ML","No informado"],
  ["ANFOTERICINA B LIPOSOMAL","ANFONAX 50MGLIOF.LIP.FAX1FIL/DIS","No informado"],
  ["ANIDULAFUNGINA","ECALTA F.A.DE PVO.LIOF.P/PERF.","No informado"],
  ["ANTITROMBINA III","AT III KEDRION 1000 U.I. F.A.1000UI + SET.INF.","No informado"],
  ["ANTITROMBINA III","AT III KEDRION 500 U.I. F.A.500UI + SET.INF.","No informado"],
  ["ANTITROMBINA III","ANTITROMBINA III UNC F.A.LIOF.+SOLV.X 10 ML","No informado"],
  ["ATOSIBAN","TRACTOCILE SOL.INY.X 0.9 ML","No informado"],
  ["ATOSIBAN","TRACTOCILE SOL.P/INF.X 5 ML","No informado"],
  ["AZTREONAM","AZTREONAM NORGREEN 1 G F.A.X 1","No informado"],
  ["CASPOFUNGIN","CANCIDAS 50 MG VIAL X 1","No informado"],
  ["CASPOFUNGIN","CANCIDAS 70 MG VIAL X 1","No informado"],
  ["CEFEPIME","CEFEPIME RICHET 1 G F.A.X 1","No informado"],
  ["CEFEPIME","CEFEPIME PHARMAVIAL 1 G F.A.X 100","No informado"],
  ["CEFEPIME","CEFEPIME 1 G F.A.X 25","No informado"],
  ["CEFEPIME","CEFEPIME RICHET 1 G F.A.X 25","No informado"],
  ["CEFEPIME","CEFIMEN-K 1 G INY.F.A.X 45","No informado"],
  ["CEFEPIME","CEFEPIME RICHET 2 G F.A.X 1","No informado"],
  ["CEFEPIME","CEFEPIME 2 G F.A.X 25","No informado"],
  ["CEFEPIME","CEFEPIME CELTYC 2 G F.A.X 25","No informado"],
  ["CEFEPIME","CEFEPIME RICHET 2 G F.A.X 25","No informado"],
  ["CEFEPIME","CEFEPIME PHARMAVIAL 2 G F.A.X 50","No informado"],
  ["CEFTAROLINA FOSAMIL","ZINFORO 600 MG F.A.X 10","No informado"],
  ["CEFTAZIDIMA+AVIBACTAM","ZAVICEFTA 2 G/0.5 G F.A.X 10","No informado"],
  ["CEFTAZIDIMA+AVIBACTAM","CEFTAAVI 2 G/0.5 G F.A.X 10","No informado"],
  ["CEFTOLOZANO+TAZOBACTAM","ZERBAXA 1/0.5 G PVO.LIOF.F.A.X10","No informado"],
  ["DAPTOMICINA","CUBICIN RT 500 MG F.A.X 1","No informado"],
  ["DAPTOMICINA","DAPTOMICINA RICHET 500MG. INY LIOF. F.A.X 1","No informado"],
  ["ERTAPENEM","INVANZ 1 G IV/IM VIAL LIOF.X 1","No informado"],
  ["ERTAPENEM","ERTAPENEM RICHET PVO.LIOF.F.A. X 1","No informado"],
  ["ESTREPTOQUINASA","STREPTOFACTOR 1500000 UI A.X 1","No informado"],
  ["FACTOR VIII+FACT.VON WILLEBRAND","WILATE 1000 UI F.A.X 1","Sí"],
  ["FACTOR VIII+FACT.VON WILLEBRAND","FANHDI 1000 UI F.A.X 1+DISOLV.","Sí"],
  ["FACTOR VIII+FACT.VON WILLEBRAND","HAEMATE P 1000 UI F.A.X 1+SET ADM.","Sí"],
  ["FACTOR VIII+FACT.VON WILLEBRAND","IMMUNATE 1000 UI LIOF.F.A.X 1","Sí"],
  ["FACTOR VIII+FACT.VON WILLEBRAND","OPTIVATE 1000UI F.A.X 1+DILY.+SET","Sí"],
  ["FACTOR VIII+FACT.VON WILLEBRAND","FANHDI 1500 UI F.A.X 1+DISOLV.","Sí"],
  ["FACTOR VIII+FACT.VON WILLEBRAND","WILATE 500 UI F.A.X 1","Sí"],
  ["FACTOR VIII+FACT.VON WILLEBRAND","OPTIVATE 500 UI F.A.X 1+DILY.+SET","Sí"],
  ["FACTOR VIII+FACT.VON WILLEBRAND","FANHDI 500 UI F.A.X 1+DISOLV.","Sí"],
  ["FACTOR VIII+FACT.VON WILLEBRAND","HAEMATE P 500 UI F.A.X 1+SET ADM.","Sí"],
  ["","IMMUNATE 500 UI LIOF.F.A.X 1","Sí"],
  ["FACTOR VIII","BERIATE P 1000 UI F.A.X1+EQ.TRANSF","Sí"],
  ["FACTOR VIII","OCTANATE 1000 UI LIOF.F.A.X 1","Sí"],
  ["FACTOR VIII","EMOCLOT 1000UI A.X1+DILU+SET INF","Sí"],
  ["FACTOR VIII","FACTOR VIII ANTIHEMOFILICO UNC 250 UI F.A.X 1+DISOLV.","Sí"],
  ["FACTOR VIII","HEMOFIL M 500 UI ENV.X 1","Sí"],
  ["FACTOR VIII","KOATE-DVI 500 UI F.A.+DILUY.+KIT","Sí"],
  ["FACTOR VIII","FACTOR VIII ANTIHEMOFILICO UNC 500 UI F.A.X 1+DISOLV.","Sí"],
  ["FACTOR VIII","BERIATE P 500 UI F.A.X 1+EQ.TRANSF","Sí"],
  ["FACTOR VIII","OCTANATE 500 UI LIOF.F.A.X 1","Sí"],
  ["FACTOR VIII","EMOCLOT 500UI A.X1+DILUY+SET INF","Sí"],
  ["FACTORES DE COAGULACIÓN","BERIPLEX P/N 500 UI F.A.X 1+EQ.TRANSF","No informado"],
  ["FACTORES DE COAGULACIÓN","OCTAPLEX 500 UI F.A.X 1+SOLV.+SET","Sí"],
  ["FACTORES DE COAGULACIÓN","PROTROMPLEX TOTAL TIM 4 600 UI F.A.","No informado"],
  ["FIBRINÓGENO HUMANO","HAEMOCOMPLETTAN P 1 G F.A. X 1","No informado"],
  ["FIBRINÓGENO HUMANO","BERIPLAST P COMBI SET ENV.X 1ML+EQ.DE APLIC.","No informado"],
  ["FIBRINÓGENO HUMANO","BERIPLAST P COMBI SET ENV.X 3ML+EQ.DE APLIC.","No informado"],
  ["FILGRASTIM","NEUTROMAX 30 MUI (300 MCG) F.A.X 1","Sí"],
  ["FLUCONAZOL","FLUCONAZOLE B.BRAUN 2 MG/ML A.X 20 X 100 ML","No informado"],
  ["FLUCONAZOL","FLUCONOVAG 2 MG/ML F.A.X 10 X 100ML","No informado"],
  ["FLUCONAZOL","FLUCONAZOL JAYOR 2 MG/ML SOL.INY. X 100ML","No informado"],
  ["FLUCONAZOL","FLUCONAZOL 200 SOLUFLEX 200 MG IV INY.SOL.X100ML","No informado"],
  ["FLUCONAZOL","FLUCONAZOL NORGREEN 200 MG SACH.X 1 X 100ML","No informado"],
  ["FLUCONAZOL","FLUCONAZOL 200 SOLUFLEX 267-EH INY. X 48 X 100ML","No informado"],
  ["FOSCARNET","FOSCARNET GEMEPE 12 G ENV.X 1 X 500 ML","No informado"],
  ["FOSCARNET","FOSCARNET RICHET BOLSA CON SOL.X 500 ML","No informado"],
  ["FOSFOLÍPIDOS+ASOC.","SURVANTA F.A.X 8 ML","No informado"],
  ["FOSFOLÍPIDOS","LIPOVENOS 10% PLR FCO.X 500 ML X 10 U","No informado"],
  ["FOSFOLÍPIDOS","LIPOVENOS 20% MCT-LCT FCO.X 500 ML X 10 UNID.","No informado"],
  ["GANCICLOVIR","GRINEVEL 500 MG A.X 1","No informado"],
  ["GANCICLOVIR","CIGANCLOR 500 MG F.A.X 1","No informado"],
  ["GANCICLOVIR","GANCICLOVIR RICHET IV 500 MG F.A.X 1","No informado"],
  ["GELATINA MODIFICADA","GELOPLASMA 3% BOLSA P/INF.X 500 ML","No informado"],
  ["GELATINA MODIFICADA","GELOPLASMA 3%BOLSA X 500 ML X 20U.","No informado"],
  ["GELATINA MODIFICADA","INFUKOLL GEL 4% BOLSA P/INF.X 500 ML","No informado"],
  ["GELATINA MODIFICADA","GELAFUNDIN 4% FCO.X 10 X 500 ML","No informado"],
  ["HIDROXIETIL ALMIDÓN","VOLUVEN 6% SACHET X 500 ML","No informado"],
  ["IMIPENEM+CILASTATÍN","IMIPENEM CILASTATINA NORGREEN 500 MG F.A.X 1 X 20 ML","No informado"],
  ["IMIPENEM+CILASTATÍN","KLONAM 500 MG F.A.X 42","No informado"],
  ["IMIPENEM+CILASTATÍN","J01D 500 MG F.A.X 50","No informado"],
  ["IMIPENEM+CILASTATÍN","CILASTATINA GEMEPE 500 MG F.A.X 50","No informado"],
  ["IMIPENEM+CILASTATÍN","IMIPENEM DRAWER 500 MG F.A.X 50","No informado"],
  ["IMIPENEM+CILASTATÍN","IMIPENEM CILASTATINA KILAB 500 MG F.A.X 50","No informado"],
  ["IMIPENEM+CILASTATÍN","IMIPENEM CILASTATIN RICHET 500 MG IV F.A.X 1","No informado"],
  ["IMIPENEM+CILASTATÍN","FADA IMIPENEM 500 MG IV F.A.X 25","No informado"],
  ["IMIPENEM+CILASTATÍN","IMIPECIL 500 MG IV F.A.X 25","No informado"],
  ["IMIPENEM+CILASTATÍN","IMIPENEM CILASTATIN RICHET 500 MG IV F.A.X 25","No informado"],
  ["IMIPENEM+CILASTATÍN","IMIPENEM CELTYC 500 MG IV F.A.X 50","No informado"],
  ["IMIPENEM+CILASTATÍN","IMIPENEM FABRA 500 MG IV PVO.P/INY.X 1","No informado"],
  ["IMIPENEM+CILASTATÍN","IMIPENEM CILASTATINA LARJAN A.X 1","No informado"],
  ["IMIPENEM+CILASTATÍN","IMIPENEM CILASTATINA LARJAN A.X 100","No informado"],
  ["INMUNOGLOBULINA ANTIHEPATITIS B","INMUNOGLOBULINA HEPATITIS-B P BEHRING 1000 UI A.X 5 ML","Sí"],
  ["INMUNOGLOBULINA ANTI-RHO","GAMMA ANTI-RHO UNC 100 MCG F.A.X 1","No informado"],
  ["INMUNOGLOBULINA ANTI-RHO","GAMMA ANTI-RHO UNC 250 MCG F.A.X 1","No informado"],
  ["INMUNOGLOBULINA ANTI-RHO","GAMMA ANTI-RHO UNC 300 MCG F.A.X 1","No informado"],
  ["INMUNOGLOBULINA ANTI-RHO","KAMRHO D 300 MCG IM F.A.X 1 X 2ML","No informado"],
  ["INMUNOGLOBULINA ANTI-RHO","IGANTID 300 MCG JGA.PRELL.X 2 ML","No informado"],
  ["INMUNOGLOBULINA ANTI-RHO","IMMUNORHO 300 MCG LIOF.X 1 X 2 ML","No informado"],
  ["INMUNOGLOBULINA ANTI-RHO","RHOPHYLAC 300MCG IM/IVJGA.PRELL.X1","No informado"],
  ["ISAVUCONAZOL","CRESEMBA 100 MG CÁPS.X 14","Sí"],
  ["ISAVUCONAZOL","CRESEMBA 200 MG F.A.X 1","Sí"],
  ["LEVETIRACETAM","KEPPRA IV 100 MG/ML 10 VIAL.X 5 ML","Sí"],
  ["LEVETIRACETAM","LEVETIRACETAM RICHET 100 MG/ML F.A.X 10","No informado"],
  ["LEVETIRACETAM","CALLEXE 500 MG INY.A.X 5","No informado"],
  ["LEVOSIMENDAN","LEVOSIMENDAN RICHET LIOFILIZADO 2.5 MG/ML INY.F.A.X 5 ML","No informado"],
  ["LINEZOLID","LINEZOLIDE GEMEPE 600 MG BOLSA X 300 ML","No informado"],
  ["LINEZOLID","ZYVOX IV 600 MG BOLSAS X 10X300ML","No informado"],
  ["LINEZOLID","LINEZOLID RICHET 600 MG BOLSAS X10X300 ML","No informado"],
  ["LINEZOLID","LITRECAN 600 INY.SOL.X 10 X 300 ML","No informado"],
  ["MEROPENEM","FADA MEROPENEM 1 G F.A.X 25","No informado"],
  ["MEROPENEM","KLOPENEM 1 G F.A.X 42","No informado"],
  ["MEROPENEM","MEROPENEM RICHET 1 G IV INY.F.A.X 1","No informado"],
  ["MEROPENEM","MEROPENEM FABRA 1000 MG F.A.X 1","No informado"],
  ["MEROPENEM","MEROPENEM HLB 1000 MG F.A.X 1","No informado"],
  ["MEROPENEM","MEROPENEM NORGREEN 1000 MG F.A.X 1 X 20 ML","No informado"],
  ["MEROPENEM","MERANT 1000 1000 MG F.A.X 10","No informado"],
  ["MEROPENEM","MEROPENEM HLB 1000 MG F.A.X 25","No informado"],
  ["MEROPENEM","MEROPENEM DRAWER 1000 MG F.A.X 50","No informado"],
  ["MEROPENEM","MEROPENEM KILAB 1000 MG F.A.X 50","No informado"],
  ["MEROPENEM","MEROPENEM CELTYC 1000 MG F.A.X 50","No informado"],
  ["MEROPENEM","MEROPENEM PHARMAVIAL 1000 MG F.A.X 50 E.H.","No informado"],
  ["MEROPENEM","MEROPENEM LARJAN 1000 MG IV INY.F.A.X 1","No informado"],
  ["MEROPENEM","MEROEFECTIL NORTHIA 1000 MG IV INY.F.A.X 25","No informado"],
  ["MEROPENEM","MEROPENEM FABRA 500 MG F.A.X 1","No informado"],
  ["MEROPENEM","MEROPENEM HLB 500 MG F.A.X 1","No informado"],
  ["MEROPENEM","MEROPENEM NORGREEN 500 MG F.A.X 1 X 20 ML","No informado"],
  ["MEROPENEM","MERANT 500 500 MG F.A.X 10","No informado"],
  ["MEROPENEM","KLOPENEM 500 MG F.A.X 25","No informado"],
  ["MEROPENEM","FADA MEROPENEM 500 MG F.A.X 25","No informado"],
  ["MEROPENEM","MEROPENEM HLB 500 MG F.A.X 25","No informado"],
  ["MEROPENEM","MEROPENEM DRAWER 500 MG F.A.X 50","No informado"],
  ["MEROPENEM","MEROPENEM KILAB 500 MG F.A.X 50","No informado"],
  ["MEROPENEM","MEROPENEM PHARMAVIAL 500 MG F.A.X 50 E.H.","No informado"],
  ["MEROPENEM","MEROEFECTIL 500 MG INY.F.A.X 25","No informado"],
  ["MEROPENEM","MEROPENEM RICHET 500 MG IV INY.F.A.X 1","No informado"],
  ["MEROPENEM","MEROPENEM LARJAN 500 MG IV INY.F.A.X 1","No informado"],
  ["MEROPENEM","MEROZEN 500 MG IV VIAL X 10","No informado"],
  ["MILRINONA","COROTROPE 1 MG/ML INY.A.X 1","No informado"],
  ["MILRINONA","MILRINONA RICHET 1 MG/ML INY.A.X 1","No informado"],
  ["MILRINONA","MILRICOR FCO.A.X 1 X 10 ML","No informado"],
  ["MILRINONA","MILRICOR FCO.A.X 25 X 10 ML","No informado"],
  ["OCTREOTIDA","GASTERINA 0.1 MG A.X 5 X 1 ML","Sí"],
  ["OCTREOTIDA","SANDOSTATIN 0.10 MG A.X 5 X 1 ML","Sí"],
  ["OCTREOTIDA","SANDOSTATIN 1 MG FCO.X 5 ML","Sí"],
  ["OCTREOTIDA","SANDOSTATIN LAR 20 MG JGA.PRELL.X 1","Sí"],
  ["OCTREOTIDA","SANDOSTATIN LAR 30 MG JGA.PRELL.X 1","Sí"],
  ["PIPERACILINA+TAZOBACTAM","PIPERACILINA TAZOBACTAM DRAWER 2.25 G F.A.X 50","No informado"],
  ["PIPERACILINA+TAZOBACTAM","PETEZAM 4.5 4 G/0.5 G F.A.X 1","No informado"],
  ["PIPERACILINA+TAZOBACTAM","FADA PIPERACILINA TAZOBACTAM 4 G/0.5 G F.A.X 50","No informado"],
  ["PIPERACILINA+TAZOBACTAM","PIPERACILINA+TAZOBACTAM NORGREEN 4.5 G F.A.X 1","No informado"],
  ["PIPERACILINA+TAZOBACTAM","PIPERACILINA+TAZOBACTAM NORTHIA 4.5 G F.A.X 50","No informado"],
  ["PIPERACILINA+TAZOBACTAM","PIPERACILINA TAZOBACTAM PHARMAVIAL 4.5 G F.A.X 50","No informado"],
  ["PIPERACILINA+TAZOBACTAM","PIPERACILINA TAZOBACTAM GEMEPE 4.5 G F.A.X 50","No informado"],
  ["PIPERACILINA+TAZOBACTAM","PIPERACILINA TAZOBACTAM DRAWER 4.5 G F.A.X 50","No informado"],
  ["PIPERACILINA+TAZOBACTAM","PIPERACILINA TAZOBACTAM KILAB 4.5 G F.A.X 50","No informado"],
  ["PIPERACILINA+TAZOBACTAM","PIPERACILINA TAZOBACTAM RICHET 4.5 G F.A.X 50","No informado"],
  ["PIPERACILINA+TAZOBACTAM","PIPERACILINA+TAZOBACTAM RICHET 4.5 G IV F.A.X 1","No informado"],
  ["PIPERACILINA+TAZOBACTAM","PIPERAC COMPUESTO 4/0.5 G INY.F.A.X 42","No informado"],
  ["PIPERACILINA+TAZOBACTAM","BAGOTAZ 4G/500 MG F.A.X 1","No informado"],
  ["PIPERACILINA+TAZOBACTAM","BAGOTAZ 4G/500MG F.A.X 100 X25ML","No informado"],
  ["PORACTANT ALFA","CUROSURF 120 F.A.X 1.5 ML","No informado"],
  ["PORACTANT ALFA","CUROSURF 240 F.A.X 3 ML","No informado"],
  ["SURFACTANTE PULMONAR","SURFACTANTE B RICHET 120 MG F.A.X 4 ML","No informado"],
  ["SURFACTANTE PULMONAR","SURFACTANTE GRAY 120 MG F.A.X 4 ML","No informado"],
  ["SURFACTANTE PULMONAR","SURFACTANTE B RICHET 200 MG F.A.X 8 ML","No informado"],
  ["SURFACTANTE PULMONAR","SURFACTANTE GRAY 200 MG F.A.X 8 ML","No informado"],
  ["SURFACTANTE PULMONAR","SURFACTANTE B RICHET 240 MG F.A.X 8 ML","No informado"],
  ["SURFACTANTE PULMONAR","SURFACTANTE GRAY 240 MG F.A.X 8 ML","No informado"],
  ["SURFACTANTE PULMONAR","SURFACTANTE B RICHET 90 MG F.A.X 3 ML","No informado"],
  ["SURFACTANTE PULMONAR","SURFACTANTE GRAY 90 MG F.A.X 3 ML","No informado"],
  ["TEICOPLANINA","TEICOPLANINA RICHET 200 MG LIOF.F.A.X 1","No informado"],
  ["TEICOPLANINA","FADA TEICOPLANINA 400 MG F.A.+ SOLV.X 1","No informado"],
  ["TEICOPLANINA","TEICOPLANINA NORTHIA 400 MG F.A.X 1","No informado"],
  ["TEICOPLANINA","TEICOPLANINA RICHET 400 MG LIOF.F.A.X 1","No informado"],
  ["TEICOPLANINA","TEICOX 400 MG LIOF.F.A.X1+SOLV.","No informado"],
  ["TERLIPRESINA","GLYPRESSIN 1 MG F.A.X 5+A.DILUY.X 5","No informado"],
  ["TIGECICLINA","TIZOXIM 50 MG F.A.LIOF.X 10","No informado"],
  ["TIGECICLINA","TIGECICLINA PHARMAVIAL 50 MG F.A.LIOF.X 10","No informado"],
  ["TIGECICLINA","TYGACIL 50 MG INY.F.A.X 10","No informado"],
  ["TIGECICLINA","TIGECICLINA LIOFILIZADO RICHET 50 MG INY.F.A.X 10","No informado"],
  ["TIROFIBAN","AGRASTAT 0.25 MG/ML VIAL X 50 ML","No informado"],
  ["VANCOMICINA","RIVERVAN 1 G F.A.X 1","No informado"],
  ["VANCOMICINA","VANCOMICINA RICHET 1 G INY.IV F.A.X 1","No informado"],
  ["VANCOMICINA","VANCOMAX 1000 MG F.A.X 30","No informado"],
  ["VANCOMICINA","VANCOMICINA GEMEPE 1000 MG F.A.X 50","No informado"],
  ["VANCOMICINA","VANCOMICINA DRAWER 1000 MG F.A.X 50","No informado"],
  ["VANCOMICINA","VANCOMICINA CELTYC 1000 1000 MG F.A.X 50","No informado"],
  ["VANCOMICINA","VANCOMICINA FABRA 1000 MG INY.F.A.X 1","No informado"],
  ["VANCOMICINA","VANCOMICINA NORTHIA 1000 MG INY.F.A.X 50","No informado"],
  ["VANCOMICINA","VAREDET 1000 MG INY.F.A.X25X20ML","No informado"],
  ["VANCOMICINA","RIVERVAN 2 G F.A.X 1","No informado"],
  ["VANCOMICINA","RIVERVAN 500 MG F.A.X 1","No informado"],
  ["VANCOMICINA","VANCOMICINA DRAWER 500 MG F.A.X 100","No informado"],
  ["VANCOMICINA","VANCOMAX 500 MG F.A.X 100","No informado"],
  ["VANCOMICINA","VANCOMICINA FABRA 500 MG INY.F.A.X 1","No informado"],
  ["VANCOMICINA","VAREDET 500 MG INY.F.A.X 25X10ML","No informado"],
  ["VANCOMICINA","VANCOMICINA NORTHIA 500 MG INY.F.A.X 50","No informado"],
  ["VANCOMICINA","VANCOMICINA RICHET 500 MG INY.IV F.A.X 1","No informado"],
  ["VORICONAZOL","V FEND 200 MG COMP.REC.X 10","No informado"],
  ["VORICONAZOL","VORICONAZOL SANDOZ 200 MG COMP.REC.X 10","No informado"],
  ["VORICONAZOL","VORINOVA 200 MG COMP.REC.X 10","No informado"],
  ["VORICONAZOL","KEFIDIM 200 MG COMP.REC.X 10","No informado"],
  ["VORICONAZOL","VORICONAZOL RICHET 200 MG COMP.X 10","No informado"],
  ["VORICONAZOL","VORICONAZOL RICHET 200 MG F.A.X 1","No informado"],
  ["VORICONAZOL","VORINOVA 200 MG F.A.X 1","No informado"],
  ["VORICONAZOL","VORICONAZOL PHARMAVIAL 200 MG F.A.X 1","No informado"],
  ["VORICONAZOL","V FEND 200 MG IV LIOF.F.A.X 1","No informado"],
  ["VORICONAZOL","V FEND 50 MG COMP.REC.X 10","No informado"],
  ["VORICONAZOL","VORICONAZOL SANDOZ 50 MG COMP.REC.X 10","No informado"],
  ["VORICONAZOL","KEFIDIM 50 MG COMP.REC.X 10","No informado"],
  ["FILGRASTIM","FILGEN 300 MCG JGA.PRELL.X 1","No informado"],
  ["FILGRASTIM","NEUTROFIL 30 MU SOL.INY.F.A.X 1","No informado"],
  ["FILGRASTIM","NEUTROPINE 300MCG JGA.PRELL.X1X 1ML","No informado"],
  ["FILGRASTIM","NEUTROMAX 30 MUI (300 MCG)","No informado"],
  ["LINEZOLID","ZYVOX ORAL 600 MG TAB.X 10","No informado"],
  ["LINEZOLID","LINEZOLID NORGREEN 600 mg","No informado"],
  ["LINEZOLID","LINEZOLID RICHET 600 MG COMP.X 10","No informado"],
  ["AZTREONAM (L-ARGININA)","AZTREONAM (L-ARGININA) 1 G FCO.A.X 1+SOLVENTE","No informado"],
  ["MIPENEM+CILASTATINA+RELEBACTAM","RECARBRIO mipenem 500 mg, Cilastatina 500 mg, Re","No informado"],
  ["VASOPRESINA SINTÉTICA","NOVOPRESSINA-V Vasopresina 20 UI","No informado"],
  ["POSACONAZOL","NOXAFIL 100MG COMP.LIB.MODIF.X24","No informado"],
  ["CASPOFUNGINA","CASPOFUNGINA SANDOZ 50 MG F.A. X 1","No informado"],
  ["CASPOFUNGINA","RAGNEROL","No informado"],
  ["ANFOTERICINA B LIPOSOMAL","AMBISOME 50 MG F.A.X 1 +DISOLV.","No informado"],
  ["ANFOTERICINA B LIPOSOMAL","AMBISOME","No informado"],
  ["ANFOTERICINA B LIPOSOMAL","ANFONAX","No informado"],
  ["CEFEPIME","CEFEPIME CELTYC 1 G F.A.X 50","No informado"],
  ["ESMOLOL","ESMOLOL RICHET 100 MG F.A.X 10 ML X 1","No informado"],
  ["NETUPITANT+PALONOSETRÓN","AKYNZEO","No informado"],
  ["ANFOTERICINA","ANFOTERICINA RICHET","No informado"],
  ["ALPROSTADIL","ALPROSTADIL GRAY","No informado"],
  ["ALPROSTADIL","ALPROSTADIL RICHET","No informado"],
  ["MEROPENEM","MEROPENEM RICHET","No informado"],
  ["VALACICLOVIR","VALTREX","No informado"],
  ["VALACICLOVIR","VALTREX","No informado"],
  ["VALACICLOVIR","VIRAMIXAL","No informado"],
  ["VALACICLOVIR","VIRAMIXAL","No informado"],
  ["VALACICLOVIR","VIRAMIXAL","No informado"],
  ["VALACICLOVIR","VALTREX","No informado"],
  ["CEFOXITINA","CEFOXITINA RICHET","No informado"],
  ["TENECTEPLASA","METALYSE 25 mg","No informado"],
  ["VANCOMINICINA","VANCOMICINA ENTEROCAPS SCHAFER 250 mg","No informado"],
  ["VANCOMINICINA","VANCOMICINA ENTEROCAPS SCHAFER","No informado"],
  ["CASPOFUNGINA","CANCIDAS 70 mg","No informado"],
  ["CASPOFUNGINA","CASPOFUNGINA SANDOZ","No informado"],
  ["CASPOFUNGINA","RAGNEROL","No informado"],
  ["CEFEPIME","CEFEPIME PHARMAVIAL 2G","No informado"],
  ["CEFEPIME","CEFEPIME KILAB","No informado"],
  ["IMIPENEM CILASTATINA","IMIPENEM CILASTATINA HLB 500 mg","No informado"],
  ["MEROPENEM","MEROPENEM PHARMAVIAL 500 mg","No informado"],
  ["MEROPENEM","MEROPENEM DRAWER","No informado"],
  ["MEROPENEM","MEROPENEM KILAB","No informado"],
  ["MEROPENEM","MEROPENEM RICHET","No informado"],
  ["VANCOMICINA","VANCOMICINA GEMEPE 500 mg","No informado"],
  ["VANCOMICINA","VANCOMICINA CELTYC 500 500 mg","No informado"],
  ["REMDESIVIR","VEKLURY 100 mg","No informado"],
  ["ACICLOVIR","LAFEVIR 500 mg","No informado"],
  ["ACICLOVIR","FADA ACICLOVIR","No informado"],
  ["ACICLOVIR","ACICLOVIR GEMEPE","No informado"],
  ["ACICLOVIR","KLOVIRACIL","No informado"],
  ["VACUNA CONTRA HEPATITIS B","HEPATIVAX","No informado"],
  ["VACUNA CONTRA HEPATITIS B","HEPATIVAX JUNIOR","No informado"],
  ["VACUNA CONTRA HEPATITIS B","BIOVAC HB","No informado"],
  ["VACUNA CONTRA HEPATITIS B","BIOVAC HB","No informado"],
  ["VACUNA CONTRA HEPATITIS B","ENGERIX-B","No informado"],
  ["VACUNA CONTRA HEPATITIS B","AG-B 20","No informado"],
  ["VACUNA CONTRA HEPATITIS B","AG-B 10","No informado"],
  ["ERITROPOYETINA RECOMB.HUMANA","EPOGEN 4000 UI F.A.X 1 X 1 ML","No informado"],
  ["ERITROPOYETINA RECOMB.HUMANA","HEMASTIM P JP 4000 UI JGA.PRELL. X 1","No informado"],
  ["ERITROPOYETINA RECOMB.HUMANA","ERITROGEN 4000 UI SOL.F.A.X 1 ML","No informado"],
  ["ERITROPOYETINA RECOMB.HUMANA","HEMASTIM P 4000 UI A.X 1 X 2 ML","No informado"],
  ["ERITROPOYETINA RECOMB.HUMANA","HEMASTIM P 4000 UI A.X 100 X 2 ML","No informado"],
  ["ERITROPOYETINA RECOMB.HUMANA","HEMAX 4000 UI PVO.LIOF.+ DILUY.","No informado"],
  ["ERITROPOYETINA RECOMB.HUMANA","HEMAX 4000 UI PVO.LIOF.+DIL.X25","No informado"],
  ["ERITROPOYETINA RECOMB.HUMANA","HYPERCRIT 4000 UI F.A.LIOF.X1+A.DISOL.X2ML","No informado"],
  ["ANIDULAFUNGINA","ANIDUSTATERA 100MG PVO.LIOF.P/INF.END","No informado"],
  ["MEROPENEM","MEROPENEM CELTYC 500 mg F.A","No informado"]
].map(([droga, medicamento, auditoria]) => ({
  financiador: "OSDE Alto Costo",
  categoria: "Internados",
  droga,
  medicamento,
  auditoria
})));
