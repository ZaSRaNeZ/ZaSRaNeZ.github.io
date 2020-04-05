var classTimetable = '';
var timetableDiv = document.createElement('div');
var obj = {
    "5а": {
        "ПОНЕДІЛОК": {
            "1": {
                "lesson": ["осн.здоров."],
                "teacherName": ["васютин"],
                "efir": ["посилання на ефір"],
                "expl": ["роз'яснення вчителя"],
                "DZ": ["посилання на д\\з"]
            },
            "2": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "3": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "4": {
                "lesson": ["Укр.літ"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "5": {
                "lesson": ["Англ.мова І", "Англ.моваІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "6": {
                "lesson": ["Укр.мова І", "Укр.мова ІІ"],
                "teacherName": ["Толочко  І.Г.", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "7": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "8": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [],
                "teacherName": [],
                "efir": [],
                "expl": [],
                "DZ": []
            }
        },
        "ВІВТОРОК": {
            "1": {
                "lesson": ["Пол.мова", "Нім.мова", "Фр.мова"],
                "teacherName": ["", "", ""],
                "efir": ["", "", ""],
                "expl": ["", "", ""],
                "DZ": ["", "", ""]
            },
            "2": {
                "lesson": ["укр.мова І", "укр.мова ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "3": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "4": {
                "lesson": ["математ"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "5": {
                "lesson": ["Ісп.мова"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "6": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "7": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "8": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [],
                "teacherName": [],
                "efir": [],
                "expl": [],
                "DZ": []
            }
        },
        "СЕРЕДА": {
            "1": {
                "lesson": ["Обр.мист"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "2": {
                "lesson": ["зар.літ"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "3": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "4": {
                "lesson": ["Англ.мова І", "Англ.моваІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "5": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "6": {
                "lesson": ["Інформатика І", "Інформатика ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "7": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "8": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [],
                "teacherName": [],
                "efir": [],
                "expl": [],
                "DZ": []
            }
        },
        "ЧЕТВЕР": {
            "1": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "2": {
                "lesson": ["фіз-ра"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "3": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "4": {
                "lesson": ["природозн"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "5": {
                "lesson": ["Англ.мова І", "Англ.моваІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "6": {
                "lesson": ["Укр.мова І", "Укр.мова ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "7": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "8": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [],
                "teacherName": [],
                "efir": [],
                "expl": [],
                "DZ": []
            }
        },
        "П’ЯТНИЦЯ": {
            "1": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "2": {
                "lesson": ["Трудове навч (дівч.)", "Трудове навч (хл.)"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "3": {
                "lesson": ["історія"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "4": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "5": {
                "lesson": ["Математика"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "6": {
                "lesson": ["Мій Київ (англ.)"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "7": {
                "lesson": ["Зустріч з кл. керівником"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "8": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [],
                "teacherName": [],
                "efir": [],
                "expl": [],
                "DZ": []
            }
        }
    },
    "5б": {
        "ПОНЕДІЛОК": {
            "1": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "2": {
                "lesson": ["укр.літ"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "3": {
                "lesson": ["Мій Київ(анг)"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "4": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "5": {
                "lesson": ["Осн.здор"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "6": {
                "lesson": ["Англ.мова І", "Англ.мова ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "7": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "8": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": ["Зустріч з кл. керівником"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [],
                "teacherName": [],
                "efir": [],
                "expl": [],
                "DZ": []
            }
        },
        "ВІВТОРОК": {
            "1": {
                "lesson": ["Нім.мова", "Фр.мова", "Ісп.мова"],
                "teacherName": ["", "", ""],
                "efir": ["", "", ""],
                "expl": ["", "", ""],
                "DZ": ["", "", ""]
            },
            "2": {
                "lesson": ["Математика"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "3": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "4": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "5": {
                "lesson": ["Англ.мова І", "Англ. мова ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "6": {
                "lesson": ["Укр.мова І", "укр.мова ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "7": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "8": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [],
                "teacherName": [],
                "efir": [],
                "expl": [],
                "DZ": []
            }
        },
        "СЕРЕДА": {
            "1": {
                "lesson": ["Англ.мова І", "Англ.мова ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "2": {
                "lesson": ["природозн"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "3": {
                "lesson": ["Фіз-ра"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "4": {
                "lesson": ["Інформатика І", "Інформатика ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "5": {
                "lesson": ["зар.літ "],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "6": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "7": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "8": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [],
                "teacherName": [],
                "efir": [],
                "expl": [],
                "DZ": []
            }
        },
        "ЧЕТВЕР": {
            "1": {
                "lesson": ["Др.іноз (польс.)"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "2": {
                "lesson": ["Обр.мист"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "3": {
                "lesson": ["Укр.мова І", "укр.мова ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "4": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "5": {
                "lesson": ["Історія"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "6": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "7": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "8": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [],
                "teacherName": [],
                "efir": [],
                "expl": [],
                "DZ": []
            }
        },
        "П’ЯТНИЦЯ": {
            "1": {
                "lesson": ["укр.мова І", "укр.мова ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "2": {
                "lesson": ["математика"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "3": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "4": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "5": {
                "lesson": ["труд.навч. (дівч.)", "труд.навч (хл.)"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "6": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "7": {
                "lesson": ["логіка"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "8": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [],
                "teacherName": [],
                "efir": [],
                "expl": [],
                "DZ": []
            }
        }
    },
    "5в": {
        "ПОНЕДІЛОК": {
            "1": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "2": {
                "lesson": ["Осн.здоров"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "3": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "4": {
                "lesson": ["Англ.мова І", "Англ.мова ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "5": {
                "lesson": ["Математика"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "6": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "7": {
                "lesson": ["Логіка"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "8": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [],
                "teacherName": [],
                "efir": [],
                "expl": [],
                "DZ": []
            }
        },
        "ВІВТОРОК": {
            "1": {
                "lesson": ["Нім.мова", "Фр.мова", "Ісп.мова"],
                "teacherName": ["", "", ""],
                "efir": ["", "", ""],
                "expl": ["", "", ""],
                "DZ": ["", "", ""]
            },
            "2": {
                "lesson": ["мій Київ(анг)"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "3": {
                "lesson": ["Англ.мова І", "Англ.мова ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "4": {
                "lesson": ["Фіз-ра"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "5": {
                "lesson": ["укр.мова І", "укр.мова ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "6": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "7": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "8": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [],
                "teacherName": [],
                "efir": [],
                "expl": [],
                "DZ": []
            }
        },
        "СЕРЕДА": {
            "1": {
                "lesson": ["Інформатика І", "Інформатика ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "2": {
                "lesson": ["обр.мист"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "3": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "4": {
                "lesson": ["укр.літ"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "5": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "6": {
                "lesson": ["Англ.мова І", "Англ.мова ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "7": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "8": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [],
                "teacherName": [],
                "efir": [],
                "expl": [],
                "DZ": []
            }
        },
        "ЧЕТВЕР": {
            "1": {
                "lesson": ["Др.іноз (польс.)", ""],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "2": {
                "lesson": ["укр.мова І", "укр.мова ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "3": {
                "lesson": ["природозн"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "4": {
                "lesson": ["Зар. літ."],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "5": {
                "lesson": ["Математика"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "6": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "7": {
                "lesson": [],
                "teacherName": [],
                "efir": [],
                "expl": [],
                "DZ": []
            },
            "8": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [],
                "teacherName": [],
                "efir": [],
                "expl": [],
                "DZ": []
            }
        },
        "П’ЯТНИЦЯ": {
            "1": {
                "lesson": ["історія"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "2": {
                "lesson": ["укр.мова І", "укр.мова ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "3": {
                "lesson": ["Труд.навч. (дівч.)", "Трудове навч (хл.)"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "4": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "5": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "6": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "7": {
                "lesson": ["Зустріч з кл. керівником"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "8": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [],
                "teacherName": [],
                "efir": [],
                "expl": [],
                "DZ": []
            }
        }
    },
    "5д": {
        "ПОНЕДІЛОК": {
            "1": {
                "lesson": ["Математика"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "2": {
                "lesson": ["Зар.літ."],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "3": {
                "lesson": ["Осн.здоров"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "4": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "5": {
                "lesson": ["укр.мова І", "укр.мова ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "6": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "7": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "8": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [],
                "teacherName": [],
                "efir": [],
                "expl": [],
                "DZ": []
            }
        },
        "ВІВТОРОК": {
            "1": {
                "lesson": ["Нім.мова", "Фр.мова", "Ісп.мова"],
                "teacherName": ["", "", ""],
                "efir": ["", "", ""],
                "expl": ["", "", ""],
                "DZ": ["", "", ""]
            },
            "2": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "3": {
                "lesson": ["природоз"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "4": {
                "lesson": ["обр.мист"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "5": {
                "lesson": ["укр.мова І", "укр.мова ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "6": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "7": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "8": {
                "lesson": ["Зустріч з кл. керівником"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [],
                "teacherName": [],
                "efir": [],
                "expl": [],
                "DZ": []
            }
        },
        "СЕРЕДА": {
            "1": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "2": {
                "lesson": ["Інформатика І", "Інформатика ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "3": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "4": {
                "lesson": ["Фіз-ра"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "5": {
                "lesson": ["Англ.мова І", "Англ.мова ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "6": {
                "lesson": ["Мій Київ(анг)"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "7": {
                "lesson": ["Логіка"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "8": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [],
                "teacherName": [],
                "efir": [],
                "expl": [],
                "DZ": []
            }
        },
        "ЧЕТВЕР": {
            "1": {
                "lesson": ["Др.іноз (польс.)"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "2": {
                "lesson": ["укр.мова", "укр.мова"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "3": {
                "lesson": ["Історія"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "4": {
                "lesson": ["Англ.мова І", "Англ.мова ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "5": {
                "lesson": ["труд.навч"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "6": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "7": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "8": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [],
                "teacherName": [],
                "efir": [],
                "expl": [],
                "DZ": []
            }
        },
        "П’ЯТНИЦЯ": {
            "1": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "2": {
                "lesson": ["Математика"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "3": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "4": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "5": {
                "lesson": ["укр.літ"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "6": {
                "lesson": ["Англ.мова І", "Англ.мова ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "7": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "8": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [],
                "teacherName": [],
                "efir": [],
                "expl": [],
                "DZ": []
            }
        }
    },
    "5р": {
        "ПОНЕДІЛОК": {
            "1": {
                "lesson": ["Обр.мист."],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "2": {
                "lesson": ["Укр.літ"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "3": {
                "lesson": ["Укр.мова І", "Укр.мова ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "4": {
                "lesson": ["Математика"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "5": {
                "lesson": ["Історія"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "6": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "7": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "8": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [],
                "teacherName": [],
                "efir": [],
                "expl": [],
                "DZ": []
            }
        },
        "ВІВТОРОК": {
            "1": {
                "lesson": ["Нім.мова", "Фр.мова", "Пол.мова"],
                "teacherName": ["", "", ""],
                "efir": ["", "", ""],
                "expl": ["", "", ""],
                "DZ": ["", "", ""]
            },
            "2": {
                "lesson": ["укр.мова І", "укр.мова ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "3": {
                "lesson": ["Англ.мова І", "Англ.мова ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "4": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "5": {
                "lesson": ["Ісп.мова"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "6": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "7": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "8": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [],
                "teacherName": [],
                "efir": [],
                "expl": [],
                "DZ": []
            }
        },
        "СЕРЕДА": {
            "1": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "2": {
                "lesson": ["Фіз-ра"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "3": {
                "lesson": ["Інформатика І", "Інформатика ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "4": {
                "lesson": ["зар.літ"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "5": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "6": {
                "lesson": ["Англ.мова І", "Англ.мова ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "7": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "8": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [],
                "teacherName": [],
                "efir": [],
                "expl": [],
                "DZ": []
            }
        },
        "ЧЕТВЕР": {
            "1": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "2": {
                "lesson": ["природозн"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "3": {
                "lesson": ["Труд.навч (дівч.)", "Труд.навч (хл.)"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "4": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "5": {
                "lesson": ["Англ.мова І", "Англ.мова ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "6": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "7": {
                "lesson": ["Логіка"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "8": {
                "lesson": ["Зустріч з кл. керівником"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [],
                "teacherName": [],
                "efir": [],
                "expl": [],
                "DZ": []
            }
        },
        "П’ЯТНИЦЯ": {
            "1": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "2": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "3": {
                "lesson": ["мій Київ(анг)"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "4": {
                "lesson": ["укр.мова І", "укр.мова ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "5": {
                "lesson": ["Математика"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "6": {
                "lesson": ["осн.здоров"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "7": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "8": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [],
                "teacherName": [],
                "efir": [],
                "expl": [],
                "DZ": []
            }
        }
    },
    "6а": {
        "ПОНЕДІЛОК": {
            "1": {
                "lesson": ["Музика"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "2": {
                "lesson": ["історія"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "3": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "4": {
                "lesson": ["Труд.навч"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "5": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "6": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "7": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "8": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            }
        },
        "ВІВТОРОК": {
            "1": {
                "lesson": ["зар.літ"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "2": {
                "lesson": ["Англ.мова І", "Англ.моваІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "3": {
                "lesson": ["Пол.мова", "Нім.мова", "Фр.мова", "Ісп.мова"],
                "teacherName": ["", "", "", ""],
                "efir": ["", "", "", ""],
                "expl": ["", "", "", ""],
                "DZ": ["", "", "", ""]
            },
            "4": {
                "lesson": ["укр. мова"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "5": {
                "lesson": ["осн.здор"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "6": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "7": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "8": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            }
        },
        "СЕРЕДА": {
            "1": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "2": {
                "lesson": ["укр.літ."],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "3": {
                "lesson": ["інф(англ) І", "інф(англ) ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "4": {
                "lesson": ["Математика"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "5": {
                "lesson": ["Біологія"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "6": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "7": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "8": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            }
        },
        "ЧЕТВЕР": {
            "1": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "2": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "3": {
                "lesson": ["Англ.мова І", "Англ.моваІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "4": {
                "lesson": ["інформатика І", "інформатика ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "5": {
                "lesson": ["Англ.мова І", "Англ.моваІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "6": {
                "lesson": ["Фіз-ра"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "7": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "8": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            }
        },
        "П’ЯТНИЦЯ": {
            "1": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "2": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "3": {
                "lesson": ["Математика"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "4": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "5": {
                "lesson": ["укр.мова"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "6": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "7": {
                "lesson": ["географія"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "8": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            }
        }
    },
    "6б": {
        "ПОНЕДІЛОК": {
            "1": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "2": {
                "lesson": ["Труд.навч І", "Труд.навч ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "3": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "4": {
                "lesson": ["Біологія"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "5": {
                "lesson": ["Географія"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "6": {
                "lesson": ["Укр.мова"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "7": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "8": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            }
        },
        "ВІВТОРОК": {
            "1": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "2": {
                "lesson": ["зар.літ"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "3": {
                "lesson": ["Пол.мова", "Нім.мова", "Фр.мова", "Ісп.мова"],
                "teacherName": ["", "", "", ""],
                "efir": ["", "", "", ""],
                "expl": ["", "", "", ""],
                "DZ": ["", "", "", ""]
            },
            "4": {
                "lesson": ["укр.мова"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "5": {
                "lesson": ["Фіз-ра"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "6": {
                "lesson": ["Англ. мова"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "7": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "8": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            }
        },
        "СЕРЕДА": {
            "1": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "2": {
                "lesson": ["Логіка"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "3": {
                "lesson": ["Історія"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "4": {
                "lesson": ["інф (англ.) І", "інф(англ) ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "5": {
                "lesson": ["Математика"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "6": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "7": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "8": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            }
        },
        "ЧЕТВЕР": {
            "1": {
                "lesson": ["Англ.мова І", "Англ.мова ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "2": {
                "lesson": ["укр.мова"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "3": {
                "lesson": ["інформатика"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "4": {
                "lesson": ["математика"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "5": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "6": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "7": {
                "lesson": ["Зустріч з кл. керівником"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "8": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            }
        },
        "П’ЯТНИЦЯ": {
            "1": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "2": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "3": {
                "lesson": ["англ.мова"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "4": {
                "lesson": ["осн.здоров"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "5": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "6": {
                "lesson": ["музика"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "7": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "8": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            }
        }
    },
    "6в": {
        "ПОНЕДІЛОК": {
            "1": {
                "lesson": ["Математика"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "2": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "3": {
                "lesson": ["Укр.мова"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "4": {
                "lesson": ["Історія"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "5": {
                "lesson": ["Англ.мова І", "Англ.мова ІІ", "Англ.мова ІІІ"],
                "teacherName": ["", "", ""],
                "efir": ["", "", ""],
                "expl": ["", "", ""],
                "DZ": ["", "", ""]
            },
            "6": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "7": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "8": {
                "lesson": ["Зустріч з кл. керівником"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            }
        },
        "ВІВТОРОК": {
            "1": {
                "lesson": ["Математика"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "2": {
                "lesson": ["Пол.мова", "Нім.мова", "Фр.мова", "Ісп.мова"],
                "teacherName": ["", "", "", ""],
                "efir": ["", "", "", ""],
                "expl": ["", "", "", ""],
                "DZ": ["", "", "", ""]
            },
            "3": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "4": {
                "lesson": ["зар.літ"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "5": {
                "lesson": ["труд.навч (дівч.)", "Труд.навч.(хл.)"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "6": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "7": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "8": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            }
        },
        "СЕРЕДА": {
            "1": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "2": {
                "lesson": ["інф(англ) І", "інф(англ) ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "3": {
                "lesson": ["Біологія"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "4": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "5": {
                "lesson": ["музика"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "6": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "7": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "8": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            }
        },
        "ЧЕТВЕР": {
            "1": {
                "lesson": ["Укр.мова"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "2": {
                "lesson": ["Математика"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "3": {
                "lesson": ["Фіз-ра"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "4": {
                "lesson": ["Географія"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "5": {
                "lesson": ["Англ.мова І", "Англ.мова ІІ", "Англ.мова ІІІ"],
                "teacherName": ["", "", ""],
                "efir": ["", "", ""],
                "expl": ["", "", ""],
                "DZ": ["", "", ""]
            },
            "6": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "7": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "8": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            }
        },
        "П’ЯТНИЦЯ": {
            "1": {
                "lesson": ["Англ.мова І", "Англ.мова ІІ", "Англ.мова ІІІ"],
                "teacherName": ["", "", ""],
                "efir": ["", "", ""],
                "expl": ["", "", ""],
                "DZ": ["", "", ""]
            },
            "2": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "3": {
                "lesson": ["укр.мова"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "4": {
                "lesson": ["Інформатика І", "Інформатика ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "5": {
                "lesson": ["осн.здоров"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "6": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "7": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "8": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            }
        }
    },
    "6г": {
        "ПОНЕДІЛОК": {
            "1": {
                "lesson": ["Математика"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "2": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "3": {
                "lesson": ["Біологія"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "4": {
                "lesson": ["Укр.мова"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "5": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "6": {
                "lesson": ["Англ.мова І", "Англ.моваІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "7": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "8": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            }
        },
        "ВІВТОРОК": {
            "1": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "2": {
                "lesson": ["Пол.мова", "Нім.мова", "Фр.мова", "Ісп.мова"],
                "teacherName": ["", "", "", ""],
                "efir": ["", "", "", ""],
                "expl": ["", "", "", ""],
                "DZ": ["", "", "", ""]
            },
            "3": {
                "lesson": ["труд.навч. (дівч.)", "труд.навч (хл.)"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "4": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "5": {
                "lesson": ["Математика"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "6": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "7": {
                "lesson": ["логіка"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "8": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            }
        },
        "СЕРЕДА": {
            "1": {
                "lesson": ["фіз-ра"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "2": {
                "lesson": ["Англ.мова І", "Англ.моваІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "3": {
                "lesson": ["географія"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "4": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "5": {
                "lesson": ["укр.мова"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "6": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "7": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "8": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            }
        },
        "ЧЕТВЕР": {
            "1": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "2": {
                "lesson": ["інф(англ) І", "інф(англ) ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "3": {
                "lesson": ["Англ.мова І", "Англ.моваІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "4": {
                "lesson": ["Укр.мова"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "5": {
                "lesson": ["історія"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "6": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "7": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "8": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            }
        },
        "П’ЯТНИЦЯ": {
            "1": {
                "lesson": ["осн.здоров"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "2": {
                "lesson": ["Зар. літ."],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "3": {
                "lesson": ["Інформатика І", "Інформатика ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "4": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "5": {
                "lesson": ["музика"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "6": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "7": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "8": {
                "lesson": ["Зустріч з кл. керівником"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            }
        }
    },
    "6д": {
        "ПОНЕДІЛОК": {
            "1": {
                "lesson": ["Укр.мова"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "2": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "3": {
                "lesson": ["Математика"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "4": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "5": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "6": {
                "lesson": ["Географія"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "7": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "8": {
                "lesson": ["Зустр. з кл. керівником"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            }
        },
        "ВІВТОРОК": {
            "1": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "2": {
                "lesson": ["Труд.навч. (дівч.)", "Труд.навч (хл.)"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "3": {
                "lesson": ["Пол.мова", "Нім.мова", "Фр.мова", "Ісп.мова"],
                "teacherName": ["", "", "", ""],
                "efir": ["", "", "", ""],
                "expl": ["", "", "", ""],
                "DZ": ["", "", "", ""]
            },
            "4": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "5": {
                "lesson": ["укр.мова"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "6": {
                "lesson": ["Історія"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "7": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "8": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            }
        },
        "СЕРЕДА": {
            "1": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "2": {
                "lesson": ["Математика"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "3": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "4": {
                "lesson": ["Англ.мова І", "Англ.моваІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "5": {
                "lesson": ["Фіз-ра"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "6": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "7": {
                "lesson": ["музика"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "8": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            }
        },
        "ЧЕТВЕР": {
            "1": {
                "lesson": ["Інф(англ) І", "Інф(англ) ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "2": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "3": {
                "lesson": ["Біологія"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "4": {
                "lesson": ["укр.мова"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "5": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "6": {
                "lesson": ["Англ.мова І", "Англ.моваІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "7": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "8": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            }
        },
        "П’ЯТНИЦЯ": {
            "1": {
                "lesson": ["Зар. літ."],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "2": {
                "lesson": ["інформ І", "інформ ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "3": {
                "lesson": ["осн.здоров"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "4": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "5": {
                "lesson": ["Англ.мова І", "Англ.моваІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "6": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "7": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "8": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            }
        }
    },
    "6р": {
        "ПОНЕДІЛОК": {
            "1": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "2": {
                "lesson": ["Укр.мова"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "3": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "4": {
                "lesson": ["Англ.мова І", "Англ.мова ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "5": {
                "lesson": ["Історія"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "6": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "7": {
                "lesson": ["Інформатика І", "Інформатика ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "8": {
                "lesson": ["Зустр. з кл. керівником"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            }
        },
        "ВІВТОРОК": {
            "1": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "2": {
                "lesson": ["Пол.мова", "Нім.мова", "Фр.мова", "Ісп.мова"],
                "teacherName": ["", "", "", ""],
                "efir": ["", "", "", ""],
                "expl": ["", "", "", ""],
                "DZ": ["", "", "", ""]
            },
            "3": {
                "lesson": ["біологія"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "4": {
                "lesson": ["географія"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "5": {
                "lesson": ["Фіз-ра"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "6": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "7": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "8": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            }
        },
        "СЕРЕДА": {
            "1": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "2": {
                "lesson": ["Англ.мова І", "Англ.мова ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "3": {
                "lesson": ["укр.мова"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "4": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "5": {
                "lesson": ["Англ.мова І", "Англ.мова ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "6": {
                "lesson": ["Математика"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "7": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "8": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            }
        },
        "ЧЕТВЕР": {
            "1": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "2": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "3": {
                "lesson": ["Труд.навч. І", "Труд.навч. ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "4": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "5": {
                "lesson": ["Математика"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "6": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "7": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "8": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            }
        },
        "П’ЯТНИЦЯ": {
            "1": {
                "lesson": ["інф(анг) І", "інф(анг) ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "2": {
                "lesson": ["осн.здоров"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "3": {
                "lesson": ["Зар. літ."],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "4": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "5": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "6": {
                "lesson": ["Укр.мова"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "7": {
                "lesson": ["музика"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "8": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            }
        }
    },
    "7а": {
        "ПОНЕДІЛОК": {
            "1": {
                "lesson": ["Пол.мова", "Нім.мова", "Фр.мова", "Ісп.мова"],
                "teacherName": ["", "", "", ""],
                "efir": ["", "", "", ""],
                "expl": ["", "", "", ""],
                "DZ": ["", "", "", ""]
            },
            "2": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "3": {
                "lesson": ["Хімія"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "4": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "5": {
                "lesson": ["англ.мова І", "англ.мова ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "6": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "7": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "8": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            }
        },
        "ВІВТОРОК": {
            "1": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "2": {
                "lesson": ["інформат І", "інформат ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "3": {
                "lesson": ["осн.здор"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "4": {
                "lesson": ["Математика"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "5": {
                "lesson": ["обр.мист"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "6": {
                "lesson": ["історія"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "7": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "8": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            }
        },
        "СЕРЕДА": {
            "1": {
                "lesson": ["англ.мова І", "англ.мова ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "2": {
                "lesson": ["укр.мова"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "3": {
                "lesson": ["зар.літ"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "4": {
                "lesson": ["укр.літ"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "5": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "6": {
                "lesson": ["географія"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "7": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "8": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            }
        },
        "ЧЕТВЕР": {
            "1": {
                "lesson": ["Математика"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "2": {
                "lesson": ["Математика"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "3": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "4": {
                "lesson": ["біологія"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "5": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "6": {
                "lesson": ["англ.мова І", "англ.мова ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "7": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "8": {
                "lesson": ["Зустріч з кл. керівником"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            }
        },
        "П’ЯТНИЦЯ": {
            "1": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "2": {
                "lesson": ["зар(анг)"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "3": {
                "lesson": ["Фіз-ра"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "4": {
                "lesson": ["історія"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "5": {
                "lesson": ["укр.мова"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "6": {
                "lesson": ["Фізика"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "7": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "8": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            }
        }
    },
    "7б": {
        "ПОНЕДІЛОК": {
            "1": {
                "lesson": ["Пол.мова", "Нім.мова", "Фр.мова", "Ісп.мова"],
                "teacherName": ["", "", "", ""],
                "efir": ["", "", "", ""],
                "expl": ["", "", "", ""],
                "DZ": ["", "", "", ""]
            },
            "2": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "3": {
                "lesson": ["математика"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "4": {
                "lesson": ["Зар.літ"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "5": {
                "lesson": ["англ.мова І", "англ.мова ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "6": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "7": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "8": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            }
        },
        "ВІВТОРОК": {
            "1": {
                "lesson": ["інформатика І", "інформатика ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "2": {
                "lesson": ["обр.мист"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "3": {
                "lesson": ["математ"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "4": {
                "lesson": ["історія"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "5": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "6": {
                "lesson": ["фізика"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "7": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "8": {
                "lesson": ["Зустріч з кл. керівником"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            }
        },
        "СЕРЕДА": {
            "1": {
                "lesson": ["укр.літ"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "2": {
                "lesson": ["Хімія"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "3": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "4": {
                "lesson": ["Географія"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "5": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "6": {
                "lesson": ["англ.мова І", "англ.мова ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "7": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "8": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            }
        },
        "ЧЕТВЕР": {
            "1": {
                "lesson": ["Біологія"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "2": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "3": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "4": {
                "lesson": ["Математика"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "5": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "6": {
                "lesson": ["фіз-ра"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "7": {
                "lesson": ["історія"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "8": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            }
        },
        "П’ЯТНИЦЯ": {
            "1": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "2": {
                "lesson": ["укр.мова І", "укр.мова ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "3": {
                "lesson": ["укр.мова І", "укр.мова ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "4": {
                "lesson": ["англ.мова І", "англ.мова ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "5": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "6": {
                "lesson": ["зар(анг)"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "7": {
                "lesson": ["осн.здоров"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "8": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            }
        }
    },
    "7в": {
        "ПОНЕДІЛОК": {
            "1": {
                "lesson": ["Пол.мова", "Нім.мова", "Фр.мова", "Ісп.мова"],
                "teacherName": ["", "", "", ""],
                "efir": ["", "", "", ""],
                "expl": ["", "", "", ""],
                "DZ": ["", "", "", ""]
            },
            "2": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "3": {
                "lesson": ["фізика"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "4": {
                "lesson": ["матем"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "5": {
                "lesson": ["інформатика І", "інформатика ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "6": {
                "lesson": ["фізика"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "7": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "8": {
                "lesson": ["Зустріч з кл. керівником (діти)"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            }
        },
        "ВІВТОРОК": {
            "1": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "2": {
                "lesson": ["англ.мова І", "англ.мова ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "3": {
                "lesson": ["зар.літ"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "4": {
                "lesson": ["історія"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "5": {
                "lesson": ["історія"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "6": {
                "lesson": ["осн.здоров"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "7": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "8": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            }
        },
        "СЕРЕДА": {
            "1": {
                "lesson": ["Хімія"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "2": {
                "lesson": ["Математика"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "3": {
                "lesson": ["англ.мова І", "англ.мова ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "4": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "5": {
                "lesson": ["", ""],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "6": {
                "lesson": ["укр.мова І", "укр.мова ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "7": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "8": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            }
        },
        "ЧЕТВЕР": {
            "1": {
                "lesson": ["Математика"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "2": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "3": {
                "lesson": ["фіз-ра"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "4": {
                "lesson": ["англ.мова І", "англ.мова ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "5": {
                "lesson": ["укр.літ"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "6": {
                "lesson": ["Біологія"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "7": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "8": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            }
        },
        "П’ЯТНИЦЯ": {
            "1": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "2": {
                "lesson": ["географія"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "3": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "4": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "5": {
                "lesson": ["зар(анг)"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "6": {
                "lesson": ["укр.мова І", "укр.мова ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "7": {
                "lesson": ["Обр.мист"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "8": {
                "lesson": ["Зустріч з кл. керівником (батьки)"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            }
        }
    },
    "7г": {
        "ПОНЕДІЛОК": {
            "1": {
                "lesson": ["Пол.мова", "Нім.мова", "Фр.мова", "Ісп.мова"],
                "teacherName": ["", "", "", ""],
                "efir": ["", "", "", ""],
                "expl": ["", "", "", ""],
                "DZ": ["", "", "", ""]
            },
            "2": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "3": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "4": {
                "lesson": ["фізика"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "5": {
                "lesson": ["Математика"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "6": {
                "lesson": ["інформатика І", "інформатика ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "7": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "8": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            }
        },
        "ВІВТОРОК": {
            "1": {
                "lesson": ["Історія"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "2": {
                "lesson": ["осн.здор"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "3": {
                "lesson": ["укр."],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "4": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "5": {
                "lesson": ["Фіз-ра"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "6": {
                "lesson": ["хімія"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "7": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "8": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            }
        },
        "СЕРЕДА": {
            "1": {
                "lesson": ["біологія"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "2": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "3": {
                "lesson": ["Математика"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "4": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "5": {
                "lesson": ["англ.мова І", "англ.мова ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "6": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "7": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "8": {
                "lesson": ["Зустріч з кл. керівником"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            }
        },
        "ЧЕТВЕР": {
            "1": {
                "lesson": ["географія"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "2": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "3": {
                "lesson": ["Математика"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "4": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "5": {
                "lesson": ["англ.мова І", "англ.мова ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "6": {
                "lesson": ["укр."],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "7": {
                "lesson": ["обр.мист"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "8": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            }
        },
        "П’ЯТНИЦЯ": {
            "1": {
                "lesson": ["укр"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "2": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "3": {
                "lesson": ["зар(анг)"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "4": {
                "lesson": ["зар.літ"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "5": {
                "lesson": ["англ.мова І", "англ.мова ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "6": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "7": {
                "lesson": ["Історія"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "8": {
                "lesson": ["Зустріч з кл. керівником (батьки) (у суботу)"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            }
        }
    },
    "8а": {
        "ПОНЕДІЛОК": {
            "1": {
                "lesson": ["англ.мова І", "англ.мова ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "2": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "3": {
                "lesson": ["укр.мова І", "укр.мова ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "4": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "5": {
                "lesson": ["укр.мова І", "укр.мова ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "6": {
                "lesson": ["фіз-ра"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "7": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "8": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            }
        },
        "ВІВТОРОК": {
            "1": {
                "lesson": ["Географія"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "2": {
                "lesson": ["Всес. Іст (англ)"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "3": {
                "lesson": ["англ.мова І", "англ.мова ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "4": {
                "lesson": ["Історія"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "5": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "6": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "7": {
                "lesson": ["осн.здор"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "8": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            }
        },
        "СЕРЕДА": {
            "1": {
                "lesson": ["історія України"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "2": {
                "lesson": ["Математика"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "3": {
                "lesson": ["англ.мова І", "англ.мова ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "4": {
                "lesson": ["Нім.мова", "Пол.мова"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "5": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "6": {
                "lesson": ["Труд.навч. (д.)", "Труд.навч. (х)"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "7": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "8": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            }
        },
        "ЧЕТВЕР": {
            "1": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "2": {
                "lesson": ["Зар. літ."],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "3": {
                "lesson": ["Історія України"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "4": {
                "lesson": ["Математика"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "5": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "6": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "7": {
                "lesson": ["інформат І", "інформат ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "8": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            }
        },
        "П’ЯТНИЦЯ": {
            "1": {
                "lesson": ["біологія"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "2": {
                "lesson": ["Хімія"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "3": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "4": {
                "lesson": ["укр.літ"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "5": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "6": {
                "lesson": ["Фізика"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "7": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "8": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": ["Зустріч з кл. керівником (у суботу)"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            }
        }
    },
    "8б": {
        "ПОНЕДІЛОК": {
            "1": {
                "lesson": ["англ.мова І", "англ.мова ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "2": {
                "lesson": ["укр.мова І", "укр.мова ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "3": {
                "lesson": ["Біологія", "всесвітня історія(англ)"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "4": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "5": {
                "lesson": ["Біологія"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "6": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "7": {
                "lesson": ["Історія України"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "8": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            }
        },
        "ВІВТОРОК": {
            "1": {
                "lesson": ["осн.здор"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "2": {
                "lesson": ["англ.мова І", "англ.мова ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "3": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "4": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "5": {
                "lesson": ["математитка"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "6": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "7": {
                "lesson": ["географія"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "8": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            }
        },
        "СЕРЕДА": {
            "1": {
                "lesson": ["Труд.навч. (д.)", "Труд.навч. (х)"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "2": {
                "lesson": ["Математика"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "3": {
                "lesson": ["Нім.мова", "Пол.мова"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "4": {
                "lesson": ["йцуцйуйцу"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "5": {
                "lesson": ["Укр.літ"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "6": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "7": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "8": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            }
        },
        "ЧЕТВЕР": {
            "1": {
                "lesson": ["фіз-ра"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "2": {
                "lesson": ["історія України"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "3": {
                "lesson": ["англ.мова І", "англ.мова ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "4": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "5": {
                "lesson": ["інформат І", "інформат ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "6": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "7": {
                "lesson": ["Зар. літ."],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "8": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            }
        },
        "П’ЯТНИЦЯ": {
            "1": {
                "lesson": ["Хімія"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "2": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "3": {
                "lesson": ["укр.мова І", "укр.мова ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "4": {
                "lesson": ["Фізика"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "5": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "6": {
                "lesson": ["Всесвітня історія"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "7": {
                "lesson": ["Зустріч з кл. керівником"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "8": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            }
        }
    },
    "8в": {
        "ПОНЕДІЛОК": {
            "1": {
                "lesson": ["Укр.літ"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "2": {
                "lesson": ["Історія"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "3": {
                "lesson": ["англ.мова І", "англ.мова ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "4": {
                "lesson": ["Нім.мова", "Ісп.мова"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "5": {
                "lesson": ["Труд.навч. (д.)", "Труд.навч. (х)"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "6": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "7": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "8": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            }
        },
        "ВІВТОРОК": {
            "1": {
                "lesson": ["зар.літ"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "2": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "3": {
                "lesson": ["фізика"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "4": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "5": {
                "lesson": ["Математика"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "6": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "7": {
                "lesson": ["історія"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "8": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            }
        },
        "СЕРЕДА": {
            "1": {
                "lesson": ["англ.мова І", "англ.мова ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "2": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "3": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "4": {
                "lesson": ["Хімія"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "5": {
                "lesson": ["Математика"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "6": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "7": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "8": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            }
        },
        "ЧЕТВЕР": {
            "1": {
                "lesson": ["фіз-ра"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "2": {
                "lesson": ["історія"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "3": {
                "lesson": ["Математика"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "4": {
                "lesson": ["укр.мова І", "укр.мова ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "5": {
                "lesson": ["укр.мова І", "укр.мова ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "6": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "7": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "8": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            }
        },
        "П’ЯТНИЦЯ": {
            "1": {
                "lesson": ["географія"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "2": {
                "lesson": ["англ.мова І", "англ.мова ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "3": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "4": {
                "lesson": ["Біологія"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "5": {
                "lesson": ["інформат І", "інформат ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "6": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "7": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "8": {
                "lesson": ["Зустріч з кл. керівником"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            }
        }
    },
    "8г": {
        "ПОНЕДІЛОК": {
            "1": {
                "lesson": ["Історія"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "2": {
                "lesson": ["математика"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "3": {
                "lesson": ["Нім.мова", "Пол.мова"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "4": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "5": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "6": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "7": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "8": {
                "lesson": ["Труд.навч. (д.)", "Труд.навч. (х)"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "9": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            }
        },
        "ВІВТОРОК": {
            "1": {
                "lesson": ["англ.мова І", "англ.мова ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "2": {
                "lesson": ["біологія"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "3": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "4": {
                "lesson": ["зар.літ"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "5": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "6": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "7": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "8": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            }
        },
        "СЕРЕДА": {
            "1": {
                "lesson": ["укр.мова І", "укр.мова ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "2": {
                "lesson": ["укр.мова І", "укр.мова ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "3": {
                "lesson": ["Географія"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "4": {
                "lesson": ["англ.мова І", "англ.мова ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "5": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "6": {
                "lesson": ["Математика"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "7": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "8": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            }
        },
        "ЧЕТВЕР": {
            "1": {
                "lesson": ["фіз-ра"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "2": {
                "lesson": ["укр.літ"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "3": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "4": {
                "lesson": ["історія"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "5": {
                "lesson": ["хімія"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "6": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "7": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "8": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            }
        },
        "П’ЯТНИЦЯ": {
            "1": {
                "lesson": ["фізика"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "2": {
                "lesson": ["Історія"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "3": {
                "lesson": ["математика"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "4": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "5": {
                "lesson": ["англ.мова І", "англ.мова ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "6": {
                "lesson": ["Зустріч з кл. керівником"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "7": {
                "lesson": ["інформат І", "інформат ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "8": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            }
        }
    },
    "9а": {
        "ПОНЕДІЛОК": {
            "1": {
                "lesson": ["зар.літ"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "2": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "3": {
                "lesson": ["укр."],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "4": {
                "lesson": ["математика"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "5": {
                "lesson": ["Математика"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "6": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "7": {
                "lesson": ["правозн"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "8": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": ["Зустріч з кл. керівником (діти, батьки)"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            }
        },
        "ВІВТОРОК": {
            "1": {
                "lesson": ["хімія"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "2": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "3": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "4": {
                "lesson": ["осн.здор."],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "5": {
                "lesson": ["Англ. мова І", "Англ. мова ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "6": {
                "lesson": ["фізика"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "7": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "8": {
                "lesson": ["труд.навч (д.)", "труд.навч (х)"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "9": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            }
        },
        "СЕРЕДА": {
            "1": {
                "lesson": ["укр."],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "2": {
                "lesson": ["Історія Укр"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "3": {
                "lesson": ["Математика"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "4": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "5": {
                "lesson": ["укр."],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "6": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "7": {
                "lesson": ["Інформатика І", "Інформатика ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "8": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            }
        },
        "ЧЕТВЕР": {
            "1": {
                "lesson": ["англ.мова І", "англ.мова ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "2": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "3": {
                "lesson": ["Нім.мова", "Ісп.мова"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "4": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "5": {
                "lesson": ["Біологія"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "6": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "7": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "8": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            }
        },
        "П’ЯТНИЦЯ": {
            "1": {
                "lesson": ["історія"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "2": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "3": {
                "lesson": ["географія"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "4": {
                "lesson": ["Англ.мова І", "Англ. мова ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "5": {
                "lesson": ["Фізика"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "6": {
                "lesson": ["фіз-ра"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "7": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "8": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            }
        }
    },
    "9б": {
        "ПОНЕДІЛОК": {
            "1": {
                "lesson": ["Хімія"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "2": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "3": {
                "lesson": ["інформатика І", "інформатика ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "4": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "5": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "6": {
                "lesson": ["Математика"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "7": {
                "lesson": ["укр."],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "8": {
                "lesson": ["Осн.здоров"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            }
        },
        "ВІВТОРОК": {
            "1": {
                "lesson": ["біологія"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "2": {
                "lesson": ["фізика"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "3": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "4": {
                "lesson": ["правозн"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "5": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "6": {
                "lesson": ["Англ.мова І", "Англ.мова ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "7": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "8": {
                "lesson": ["труд.навч (д.)", "труд.навч (х)"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "9": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            }
        },
        "СЕРЕДА": {
            "1": {
                "lesson": ["Математика"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "2": {
                "lesson": ["укр."],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "3": {
                "lesson": ["укр."],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "4": {
                "lesson": ["зар.літ"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "5": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "6": {
                "lesson": ["фіз-ра"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "7": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "8": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            }
        },
        "ЧЕТВЕР": {
            "1": {
                "lesson": ["Історія Укр"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "2": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "3": {
                "lesson": ["Математика"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "4": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "5": {
                "lesson": ["Англ.мова І", "Англ. мова ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "6": {
                "lesson": ["Нім.мова", "Ісп.мова"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "7": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "8": {
                "lesson": ["Зустріч з кл. керівником (діти, батьки)"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            }
        },
        "П’ЯТНИЦЯ": {
            "1": {
                "lesson": ["Фізика"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "2": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "3": {
                "lesson": ["історія"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "4": {
                "lesson": ["англ.мова І", "англ.мова ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "5": {
                "lesson": ["Географія"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "6": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "7": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "8": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            }
        }
    },
    "9в": {
        "ПОНЕДІЛОК": {
            "1": {
                "lesson": ["інформатика І", "інформатика ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "2": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "3": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "4": {
                "lesson": ["Осн.здоров"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "5": {
                "lesson": ["Фізика"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "6": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "7": {
                "lesson": ["Географія"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "8": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            }
        },
        "ВІВТОРОК": {
            "1": {
                "lesson": ["англ.мова І", "англ.мова ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "2": {
                "lesson": ["Математика"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "3": {
                "lesson": ["фіз-ра"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "4": {
                "lesson": ["хімія"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "5": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "6": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "7": {
                "lesson": ["біологія"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "8": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": ["Зустріч з кл. керівником (діти, батьки)"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            }
        },
        "СЕРЕДА": {
            "1": {
                "lesson": ["англ.мова І", "англ.мова ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "2": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "3": {
                "lesson": ["нім.мова", "ісп.мова"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "4": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "5": {
                "lesson": ["історія"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "6": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "7": {
                "lesson": ["фізика"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "8": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            }
        },
        "ЧЕТВЕР": {
            "1": {
                "lesson": ["Математика"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "2": {
                "lesson": ["труд.навч (д.)", "труд.навч (х)"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "3": {
                "lesson": ["англ.мова І", "англ.мова ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "4": {
                "lesson": ["укр."],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "5": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "6": {
                "lesson": ["Зар. літ."],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "7": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "8": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            }
        },
        "П’ЯТНИЦЯ": {
            "1": {
                "lesson": ["Математика"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "2": {
                "lesson": ["Історія"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "3": {
                "lesson": ["Правозн."],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "4": {
                "lesson": ["укр."],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "5": {
                "lesson": ["укр."],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "6": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "7": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "8": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            }
        }
    },
    "9г": {
        "ПОНЕДІЛОК": {
            "1": {
                "lesson": ["географія"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "2": {
                "lesson": ["історія України"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "3": {
                "lesson": ["англ.мова І", "англ.мова ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "4": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "5": {
                "lesson": ["хімія"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "6": {
                "lesson": ["осн.здоров."],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "7": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "8": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [],
                "teacherName": [],
                "efir": [],
                "expl": [],
                "DZ": []
            }
        },
        "ВІВТОРОК": {
            "1": {
                "lesson": ["укр."],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "2": {
                "lesson": ["Математика"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "3": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "4": {
                "lesson": ["фізика"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "5": {
                "lesson": ["інформатика І", "інформатика ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "6": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "7": {
                "lesson": ["англ.мова І", "англ.мова ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "8": {
                "lesson": ["Зустріч з кл. керівником (діти, батьки)"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            }
        },
        "СЕРЕДА": {
            "1": {
                "lesson": ["Нім.мова", "Ісп.мова"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "2": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "3": {
                "lesson": ["Труд.навч. (д.)", "Труд.навч. (х)"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "4": {
                "lesson": ["укр."],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "5": {
                "lesson": ["Біологія"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "6": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "7": {
                "lesson": ["правозн"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "8": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            }
        },
        "ЧЕТВЕР": {
            "1": {
                "lesson": ["фізика"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "2": {
                "lesson": ["фізика"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "3": {
                "lesson": ["Укр."],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "4": {
                "lesson": ["Зар. літ."],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "5": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "6": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "7": {
                "lesson": ["Математика"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "8": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            }
        },
        "П’ЯТНИЦЯ": {
            "1": {
                "lesson": ["Математика"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "2": {
                "lesson": ["англ.мова І", "англ.мова ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "3": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "4": {
                "lesson": ["історія"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "5": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "6": {
                "lesson": ["Фіз-ра"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "7": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "8": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            }
        }
    },
    "9д": {
        "ПОНЕДІЛОК": {
            "1": {
                "lesson": ["Біологія"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "2": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "3": {
                "lesson": ["Математика"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "4": {
                "lesson": ["англ.мова І", "англ.мова ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "5": {
                "lesson": ["правозн"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "6": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "7": {
                "lesson": ["Осн.здоров."],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "8": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            }
        },
        "ВІВТОРОК": {
            "1": {
                "lesson": ["Історія Укр."],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "2": {
                "lesson": ["укр."],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "3": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "4": {
                "lesson": ["Укр."],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "5": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "6": {
                "lesson": ["Математика"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "7": {
                "lesson": ["Інформатика І", "інформатика ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "8": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            }
        },
        "СЕРЕДА": {
            "1": {
                "lesson": ["історія"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "2": {
                "lesson": ["Математика"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "3": {
                "lesson": ["Труд.навч.(д)", "Труд.навч.(х)"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "4": {
                "lesson": ["Фізика"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "5": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "6": {
                "lesson": ["Фіз-ра"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "7": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "8": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            }
        },
        "ЧЕТВЕР": {
            "1": {
                "lesson": ["географія"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "2": {
                "lesson": ["нім.мова", "ісп.мова"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "3": {
                "lesson": ["історія всес"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "4": {
                "lesson": ["хімія"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "5": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "6": {
                "lesson": ["англ.мова І", "англ.мова ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "7": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "8": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            }
        },
        "П’ЯТНИЦЯ": {
            "1": {
                "lesson": ["англ.мова І", "англ.мова ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "2": {
                "lesson": ["укр."],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "3": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "4": {
                "lesson": ["фізика"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "5": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "6": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "7": {
                "lesson": ["Зар.літ"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "8": {
                "lesson": ["Зустріч з кл. керівником (діти, батьки)"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            }
        }
    },
    "10а": {
        "ПОНЕДІЛОК": {
            "1": {
                "lesson": ["зар.літ"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "2": {
                "lesson": ["Географія"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "3": {
                "lesson": ["нім.мова", "ісп.мова"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "4": {
                "lesson": ["гром.освіта"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "5": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "6": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "7": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "8": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            }
        },
        "ВІВТОРОК": {
            "1": {
                "lesson": ["укр.мова І", "укр.мова ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "2": {
                "lesson": ["укр.мова І", "укр.мова ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "3": {
                "lesson": ["Історія Укр"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "4": {
                "lesson": ["англ. І", "англ. ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "5": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "6": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "7": {
                "lesson": ["мистецтво"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "8": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": ["Зустріч з кл. керівником (діти)"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            }
        },
        "СЕРЕДА": {
            "1": {
                "lesson": ["англ. І", "англ. ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "2": {
                "lesson": ["труд.навч (д)", "труд.навч (х)"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "3": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "4": {
                "lesson": ["англ. І", "англ. ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "5": {
                "lesson": ["історія "],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "6": {
                "lesson": ["хімія"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "7": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "8": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            }
        },
        "ЧЕТВЕР": {
            "1": {
                "lesson": ["англ. І", "англ. ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "2": {
                "lesson": ["англ. І", "англ. ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "3": {
                "lesson": ["укр.літ"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "4": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "5": {
                "lesson": ["Фізика"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "6": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "7": {
                "lesson": ["ОЗВ (д)", "ОЗВ (х)"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "8": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            }
        },
        "П’ЯТНИЦЯ": {
            "1": {
                "lesson": ["Математика"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "2": {
                "lesson": ["Математика"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "3": {
                "lesson": ["Фізика"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "4": {
                "lesson": ["Біологія"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "5": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "6": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "7": {
                "lesson": ["Фіз-ра"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "8": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": ["Зустріч з кл. керівником (батьки) - 16:00"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            }
        }
    },
    "10б": {
        "ПОНЕДІЛОК": {
            "1": {
                "lesson": ["всес.іст"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "2": {
                "lesson": ["Зар.літ"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "3": {
                "lesson": ["Фізика"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "4": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "5": {
                "lesson": ["фіз-ра"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "6": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "7": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "8": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            }
        },
        "ВІВТОРОК": {
            "1": {
                "lesson": ["мистецтво"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "2": {
                "lesson": ["історія Укр"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "3": {
                "lesson": ["англ. І", "англ. ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "4": {
                "lesson": ["укр.мова І", "укр.мова ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "5": {
                "lesson": ["укр.мова І", "укр.мова ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "6": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "7": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "8": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": ["консультація (укр.мова)"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            }
        },
        "СЕРЕДА": {
            "1": {
                "lesson": ["Математика"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "2": {
                "lesson": ["Фізика"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "3": {
                "lesson": ["англ. І", "англ. ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "4": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "5": {
                "lesson": ["хімія"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "6": {
                "lesson": ["англ. І", "англ. ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "7": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "8": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            }
        },
        "ЧЕТВЕР": {
            "1": {
                "lesson": ["труд.навч (д)", "труд.навч (х)"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "2": {
                "lesson": ["нім.мова", "пол.мова"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "3": {
                "lesson": ["ОЗВ (д)", "ОЗВ (х)"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "4": {
                "lesson": ["англ. І", "англ. ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "5": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "6": {
                "lesson": ["укр.літ"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "7": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "8": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            }
        },
        "П’ЯТНИЦЯ": {
            "1": {
                "lesson": ["географія"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "2": {
                "lesson": ["англ. І", "англ. ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "3": {
                "lesson": ["Математика"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "4": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "5": {
                "lesson": ["біологія"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "6": {
                "lesson": ["гром.осв"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "7": {
                "lesson": ["Зустріч з кл. керівником (діти, батьки)"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "8": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": ["Зустріч з кл. керівником (батьки) - 19:00"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            }
        }
    },
    "10в": {
        "ПОНЕДІЛОК": {
            "1": {
                "lesson": ["фізика", "інформатика"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "2": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "3": {
                "lesson": ["географія"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "4": {
                "lesson": ["зар.літ"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "5": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "6": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "7": {
                "lesson": ["математика", "інформатика"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "8": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            }
        },
        "ВІВТОРОК": {
            "1": {
                "lesson": ["математика", "фізика"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "2": {
                "lesson": ["ОЗВ (д)", "ОЗВ (х)"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "3": {
                "lesson": ["математика", "інформатика"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "4": {
                "lesson": ["математика", "інформатика"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "5": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "6": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "7": {
                "lesson": ["хімія"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "8": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": ["консультація (укр.мова)"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            }
        },
        "СЕРЕДА": {
            "1": {
                "lesson": ["укр."],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "2": {
                "lesson": ["укр."],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "3": {
                "lesson": ["Історія Укр"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "4": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "5": {
                "lesson": ["математика", "інформатика"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "6": {
                "lesson": ["біологія"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "7": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "8": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            }
        },
        "ЧЕТВЕР": {
            "1": {
                "lesson": ["геометрія"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "2": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "3": {
                "lesson": ["англ.мова І", "англ. мова ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "4": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "5": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "6": {
                "lesson": ["гром.освіта"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "7": {
                "lesson": ["Трудове навчання"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "8": {
                "lesson": ["Зустріч з кл. керівником (діти)"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": ["Зустріч з кл. керівником (батьки)"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            }
        },
        "П’ЯТНИЦЯ": {
            "1": {
                "lesson": ["укр"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "2": {
                "lesson": ["фізика", "математика"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "3": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "4": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "5": {
                "lesson": ["англ.мова І", "англ. мова ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "6": {
                "lesson": ["англ.мова І", "англ. мова ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "7": {
                "lesson": ["Фіз-ра"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "8": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            }
        }
    },
    "10г": {
        "ПОНЕДІЛОК": {
            "1": {
                "lesson": ["Історія України", "Біологія"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "2": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "3": {
                "lesson": ["англ.мова І", "англ.мова ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "4": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "5": {
                "lesson": ["фіз-ра"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "6": {
                "lesson": ["Всесвітня історія"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "7": {
                "lesson": ["математика", "гром.осв"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "8": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            }
        },
        "ВІВТОРОК": {
            "1": {
                "lesson": ["Правознавство ", "Біологія"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "2": {
                "lesson": ["укр.літ"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "3": {
                "lesson": ["хімія"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "4": {
                "lesson": ["ОЗВ (д)", "ОЗВ (х)"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "5": {
                "lesson": ["історія України", "біологія"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "6": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "7": {
                "lesson": ["Зустріч з кл. керівником (діти)"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "8": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": ["консультація (укр.мова)"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            }
        },
        "СЕРЕДА": {
            "1": {
                "lesson": ["фізика"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "2": {
                "lesson": ["англ.мова І", "англ.мова ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "3": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "4": {
                "lesson": ["Історія України", "Біологія"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "5": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "6": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "7": {
                "lesson": ["труд.навч (д)", "труд.навч (х)"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "8": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": ["Зустріч з кл. керівником (батьки) - 18:00"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            }
        },
        "ЧЕТВЕР": {
            "1": {
                "lesson": ["укр.мова", "математика"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "2": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "3": {
                "lesson": ["фізика"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "4": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "5": {
                "lesson": ["математика", "укр.мова"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "6": {
                "lesson": ["математика", "укрмова"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "7": {
                "lesson": ["географія"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "8": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            }
        },
        "П’ЯТНИЦЯ": {
            "1": {
                "lesson": ["англ.мова І", "англ.мова ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "2": {
                "lesson": ["зар .літ "],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "3": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "4": {
                "lesson": ["право ", "геометрія"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "5": {
                "lesson": ["математика", "українська"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "6": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "7": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "8": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            }
        }
    },
    "11а": {
        "ПОНЕДІЛОК": {
            "1": {
                "lesson": ["фізика"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "2": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "3": {
                "lesson": ["ОЗВ"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "4": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "5": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "6": {
                "lesson": ["англ. І", "англ. ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "7": {
                "lesson": ["англ. І", "англ. ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "8": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            }
        },
        "ВІВТОРОК": {
            "1": {
                "lesson": ["укр."],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "2": {
                "lesson": ["географія"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "3": {
                "lesson": ["зар.літ"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "4": {
                "lesson": ["укр."],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "5": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "6": {
                "lesson": ["нім.мова", "рос.мова"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "7": {
                "lesson": ["фіз-ра"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "8": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": ["Хімія (консультація)"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            }
        },
        "СЕРЕДА": {
            "1": {
                "lesson": ["англ. І", "англ. ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "2": {
                "lesson": ["англ. І", "англ. ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "3": {
                "lesson": ["хімія"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "4": {
                "lesson": ["Труд.навч. (д)", "Труд.навч. (х)"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "5": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "6": {
                "lesson": ["історія"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "7": {
                "lesson": ["Зустріч з кл. керівником (діти)"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "8": {
                "lesson": ["Зустріч з кл. керівником (батьки) "],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": ["консультація (укр.мова)"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            }
        },
        "ЧЕТВЕР": {
            "1": {
                "lesson": ["мистец"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "2": {
                "lesson": ["англ. І", "англ. ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "3": {
                "lesson": ["англ. І", "англ. ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "4": {
                "lesson": ["історія"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "5": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "6": {
                "lesson": ["Математика"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "7": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "8": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            }
        },
        "П’ЯТНИЦЯ": {
            "1": {
                "lesson": ["укр."],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "2": {
                "lesson": ["укр."],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "3": {
                "lesson": ["англ. І", "англ. ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "4": {
                "lesson": ["англ. І", "англ. ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "5": {
                "lesson": ["історія"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "6": {
                "lesson": ["Біологія"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "7": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "8": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": ["Хімія (консультація)"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            }
        }
    },
    "11б": {
        "ПОНЕДІЛОК": {
            "1": {
                "lesson": ["англ. І", "англ. ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "2": {
                "lesson": ["Мистецтво"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "3": {
                "lesson": ["укр.І", "укр. ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "4": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "5": {
                "lesson": ["ОЗВ"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "6": {
                "lesson": ["математика І", "математика ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "7": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "8": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            }
        },
        "ВІВТОРОК": {
            "1": {
                "lesson": ["Фізика"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "2": {
                "lesson": ["анг.мова", "біологія"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "3": {
                "lesson": ["математика І", "математика ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "4": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "5": {
                "lesson": ["англ. І", "англ. ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "6": {
                "lesson": ["англ. І", "англ. ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "7": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "8": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": ["Хімія (консультація)"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            }
        },
        "СЕРЕДА": {
            "1": {
                "lesson": ["укр.літ"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "2": {
                "lesson": ["історія"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "3": {
                "lesson": ["укр.І", "укр. ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "4": {
                "lesson": ["укр.І", "укр. ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "5": {
                "lesson": ["інформатика І", "інформатика ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "6": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "7": {
                "lesson": ["зар.літ"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "8": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": ["консультація (укр.мова)"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            }
        },
        "ЧЕТВЕР": {
            "1": {
                "lesson": ["англ. І", "англ. ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "2": {
                "lesson": ["англ. І", "англ. ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "3": {
                "lesson": ["біологія", "математика"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "4": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "5": {
                "lesson": ["фіз-ра"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "6": {
                "lesson": ["географія"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "7": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "8": {
                "lesson": ["історія"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": ["історія"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            }
        },
        "П’ЯТНИЦЯ": {
            "1": {
                "lesson": ["біологія", "нім.мова"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "2": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "3": {
                "lesson": ["математика", "англ.мова"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "4": {
                "lesson": ["Історія"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "5": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "6": {
                "lesson": ["хімія"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "7": {
                "lesson": ["Зустріч з кл. керівником (діти)"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "8": {
                "lesson": ["Зустріч з кл. керівником (батьки) "],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": ["Хімія (консультація)"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            }
        }
    },
    "11в": {
        "ПОНЕДІЛОК": {
            "1": {
                "lesson": ["математика", "фізика"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "2": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "3": {
                "lesson": ["інформатика ", "математика"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "4": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "5": {
                "lesson": ["Географія"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "6": {
                "lesson": ["Труд.навч (д)", "Труд.навч (х)"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "7": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "8": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            }
        },
        "ВІВТОРОК": {
            "1": {
                "lesson": ["англ. І", "англ. ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "2": {
                "lesson": ["англ. І", "англ. ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "3": {
                "lesson": ["фізика ", "інформатика"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "4": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "5": {
                "lesson": ["математика", "фізика"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "6": {
                "lesson": ["ОЗВ"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "7": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "8": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": ["Хімія (консультація)"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            }
        },
        "СЕРЕДА": {
            "1": {
                "lesson": ["укр.Літ", "укр.Літ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "2": {
                "lesson": ["", "укр.мова ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "3": {
                "lesson": ["зар.літ"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "4": {
                "lesson": ["англ. І", "англ. ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "5": {
                "lesson": ["англ. І", "англ. ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "6": {
                "lesson": ["укр.мова І"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "7": {
                "lesson": ["укр.мова ІІ"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "8": {
                "lesson": ["історія"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": ["Зустріч з кл. керівником (діти)"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": ["консультація (укр.мова) 15:00"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            }
        },
        "ЧЕТВЕР": {
            "1": {
                "lesson": ["інформатика", "математика"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "2": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "3": {
                "lesson": ["хімія"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "4": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "5": {
                "lesson": ["фіз-ра"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "6": {
                "lesson": ["історія"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "7": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "8": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": ["Зустріч з кл. керівником (батьки)"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            }
        },
        "П’ЯТНИЦЯ": {
            "1": {
                "lesson": ["інформатика", "математика"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "2": {
                "lesson": ["англ. І", "англ. ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "3": {
                "lesson": ["Біологія"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "4": {
                "lesson": ["геометрія"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "5": {
                "lesson": ["Історія"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "6": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "7": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "8": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": ["Хімія (консультація)"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            }
        }
    },
    "11г": {
        "ПОНЕДІЛОК": {
            "1": {
                "lesson": ["географія"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "2": {
                "lesson": ["англ. І", "англ. ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "3": {
                "lesson": ["англ. І", "англ. ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "4": {
                "lesson": ["Історія України"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "5": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "6": {
                "lesson": ["Фізика"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "7": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "8": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            }
        },
        "ВІВТОРОК": {
            "1": {
                "lesson": ["Математика"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "2": {
                "lesson": ["Математика"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "3": {
                "lesson": ["англ. І", "англ. ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "4": {
                "lesson": ["англ. І", "англ. ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "5": {
                "lesson": ["укр."],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "6": {
                "lesson": ["укр."],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "7": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "8": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": ["Хімія (консультація)"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            }
        },
        "СЕРЕДА": {
            "1": {
                "lesson": ["Біологія"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "2": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "3": {
                "lesson": ["мистецтво"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "4": {
                "lesson": ["зар.літ"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "5": {
                "lesson": ["Правознавство"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "6": {
                "lesson": ["Історія"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "7": {
                "lesson": ["ОЗВ"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "8": {
                "lesson": ["консультація (укр.мова)"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": ["консультація (укр.мова)"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            }
        },
        "ЧЕТВЕР": {
            "1": {
                "lesson": ["хімія"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "2": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "3": {
                "lesson": ["укр."],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "4": {
                "lesson": ["укр."],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "5": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "6": {
                "lesson": ["Історія України"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "7": {
                "lesson": ["Історія"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "8": {
                "lesson": ["труд.навч (д)", "труд.навч (х)"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "9": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            }
        },
        "П’ЯТНИЦЯ": {
            "1": {
                "lesson": ["англ. І", "англ. ІІ"],
                "teacherName": ["", ""],
                "efir": ["", ""],
                "expl": ["", ""],
                "DZ": ["", ""]
            },
            "2": {
                "lesson": ["Математика"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "3": {
                "lesson": ["укр."],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "4": {
                "lesson": ["укр."],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "5": {
                "lesson": ["Фіз-ра"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "6": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "7": {
                "lesson": ["Всесвітя історія"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "8": {
                "lesson": ["Зустріч з кл. керівником (діти, батьки)"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "9": {
                "lesson": ["Хімія (консультація)"],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            },
            "10": {
                "lesson": [""],
                "teacherName": [""],
                "efir": [""],
                "expl": [""],
                "DZ": [""]
            }
        }
    }
};


function timetableGenerator(obj) {

    for (let className in obj) {

        classTimetable += `
        <div class="timetable">
            <div class="timetable__wrapper">
                <div class="timetable__clas-name">${className}</div>
                <div class="timetable__container">`

        for (let day in obj[className]) {
            classTimetable += `
                    <div class="timetable__day day">
                                <div class="day__title">${day}</div>
                                <div class="day__content">
                                    <ul class="day__list">`
            for (let lesson in obj[className][day]) {
                classTimetable += `<li class="day__list-item">
                <div class="day__lesson-number">${lesson}</div>
                <div class="day__lesson-info">`;
                for (let lessoninfo in obj[className][day][lesson].lesson) {
                    classTimetable += `<div class="day__lesson-info-block">
                    <div class="day__lesson-info-item">${obj[className][day][lesson].lesson[lessoninfo]}</div>
                    <div class="day__lesson-info-item">${obj[className][day][lesson].teacherName[lessoninfo]}</div>
                    <div class="day__lesson-info-item">${obj[className][day][lesson].efir[lessoninfo]}</div>
                    <div class="day__lesson-info-item">${obj[className][day][lesson].expl[lessoninfo]}</div>
                    <div class="day__lesson-info-item">${obj[className][day][lesson].DZ[lessoninfo]}</div>
                    </div>`
                }
                classTimetable += `    </div>
            </li>`
            }
            classTimetable += `</ul>
                                </div>
                            </div>
                    `
        }
        classTimetable += `
                </div>
            </div>
        </div>`
    }

    timetableDiv.innerHTML += classTimetable;
    document.getElementById('main').append(timetableDiv);




}

timetableGenerator(obj);

/*============== Для теста нфиг нада




(function() {
    var app = "https://script.google.com/macros/s/AKfycbx9mC81n4B4OVCOROQMkbCHvOHZqccpBGeIdxyhmhO5bDtt9j8/exec",
        output = {},
        xhr = new XMLHttpRequest();
    xhr.open('GET', app);
    xhr.onreadystatechange = function() {
        if (xhr.readyState !== 4) return;
        if (xhr.status == 200) {
            try {
                var output = JSON.parse(xhr.response);
            } catch (e) {}
        }
        timetableGenerator(output);
    }
    xhr.send()
})()

*/