
> Esercizio 20
# ValidaForm

Scrivere in un documento HTML una form contenente i seguenti campi:
-   cognome (casella di testo editabile lunga 40 caratteri)
-   nome (casella di testo editabile lunga 30 caratteri)
-   matricola (casella di testo editabile lunga 12 caratteri)
-   regione di residenza (da scegliere da un menu che riporta le 20 regioni italiane)
-   email (casella di testo editabile lunga 30 caratteri)
-   telefono (casella di testo editabile lunga 15 caratteri)
-   richieste particolari (area di testo editabile di 12 righe per 60 colonne)
-   bottone di invio
-   bottone di reset

Aggiungere al documento HTML una funzione JavaScript che esegue i seguenti controlli:
1.  verifica che il cognome non sia vuoto;
2.  verifica che il nome non sia vuoto;
3.  verifica che la matricola sia un numero;
4.  verifica che sia stata selezionata una regione;
5.  verifica che o l’email o il telefono siano non vuoti.

Inoltre, fare in modo che, nel documento HTML, tale funzione JavaScript venga eseguita quando l’utente invia la form.


***
### Note sul js
Per creare la linea rosso sotto gli input errati e stato utilizzato lo strumento **classList**.
Per fare la sottolineature rossa;

    _punatatore.classList.add("redBorder");

redBorder è nel CSS e contiene:

```
.redBorder {
	border-bottom: 1px  solid  red;
}
```

Per il controllo sulla mail è stato usato questo codice:
```
if ((!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(_email.value)))) {					
	_email.classList.add("redBorder");
	return  false;
}
```
| Character | Description |
|--|--|
| / .. / | All regular expressions start and end with forward slashes. |
|^|Matches the beginning of the string or line.|
|\w+|Matches one or more word characters including the underscore. Equivalent to [A-Za-z0-9_].|
|[\.-]|\ Indicates that the next character is special and not to be interpreted literally.  .- matches character . or -.|
|?|Matches the previous character 0 or 1 time. Here previous character is [.-].|
|\w+|Matches 1 or more word characters including the underscore. Equivalent to [A-Za-z0-9_].|
|*|Matches the previous character 0 or more times.|
|([.-]?\w+)*|Matches 0 or more occurrences of [.-]?\w+.|
|\w+([.-]?\w+)*|The sub-expression \w+([.-]?\w+)* is used to match the username in the email. It begins with at least one or more word characters including the underscore, equivalent to [A-Za-z0-9_]. , followed by . or - and . or - must follow by a word character (A-Za-z0-9_).|
|@|It matches only @ character.|
|\w+([.-]?\w+)*|It matches the domain name with the same pattern of user name described above..|
|\.\w{2,3}|It matches a . followed by two or three word characters, e.g., .edu, .org, .com, .uk, .us, .co etc|
|+|The + sign specifies that the above sub-expression shall occur one or more times, e.g., .com, .co.us, .edu.uk etc.|
|$|Matches the end of the string or line.|

Per il controllo sul telefono è stato usato questo codice:
```
if ((!(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(_tel.value)))) {
	alert("sono qui");
	_tel.classList.add("redBorder");
	return  false;
}
```
Valid formats:

**(123) 456-7890**  
**(123)456-7890**  
**123-456-7890**  
**123.456.7890**  
**1234567890**  
**+31636363634**  
**075-63546725**

