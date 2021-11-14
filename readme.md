# Описание 

CLI_Task1 консольное приложение позволяющее производить шифрование или дешифрование текстовых файлов, а также вводимого в консоли текста в соответствии с заданными алгоритмами шифрования.

CLI_Task1  использует три варианта шифрования:
> Caesar cipher <https://en.wikipedia.org/wiki/Caesar_cipher>
> Atbash cipher <https://en.wikipedia.org/wiki/Atbash>
> ROT-8 cipher as variation of ROT-13 <https://en.wikipedia.org/wiki/ROT13>

> Caesar cipher в приложении CLI_Task1 позволяет осуществлять подстановку, в котором каждая буква в заданном тексте заменяется буквой со сдвигом на одну позицию в алфавите. 
> Atbash cipher в приложении CLI_Task1 позволяет осуществлять подстановку, в котором каждая буква в заданном тексте заменяется буквой в зеркальном порядке. 
> ROT-8 cipher в приложении CLI_Task1 позволяет осуществлять подстановку, в котором каждая буква в заданном тексте заменяется буквой со сдвигом на восемь позиций в алфавите. 

## Запуск приложения

1. Для запуска приложения необходимо создать директорию (папку) и перейдя в нее используя Git в консоли запустить команду 
git clone https://github.com/battiw/CLI_Task_1.git

2. После копирования приложения на локальный компьютер необходимо перейти в созданную директорию (папку), запустить терминал(консоль) и в строке указать файл 'app.js'
> [пример] node app.js ...

3. Далее необходимо указать соответствующие параметры шифрования и ввода вывода текстовой информации и запустить приложение.
> [пример] node app.js --config "C1-A-R1" --input "./input.txt" --output "./output.txt"


## Параметры ввода 

> --сonfig (возможно -c) инициализация конфигурации после которой необходимо ввести требуемые параметры использования алгоритмов шифрования в следующем формате:
>> С -  шифр Caesar
>> A -  шифр Atbash
>> R -  шифр ROT-8

>> шифр Caesar и шифр ROT-8 имеет дополнительный параметр:
>>> 0 - параметр шифрования 
>>> 1 - параметр дешифрования

>> [пример]  ... --config "C0-A-R1"... 
>> при этом CLI_Task1 выполнит  последовательное преобразования информации в соответствии с заданным параметрами, т.е. сначало выполнится шифрование по шифру Caesar, затем полученная информация преобразуется по шифру Atbash и затем произойдет дешифрование по шифру ROT-8

> --input (возможно -i) инициализация конфигурации параметров вводной информации после которой необходимо ввести путь к файлу в котором содержится текст необходимый для шифрования
>> [пример] ...--input "./input.txt" ...
>> [пример] ...-i "./input.txt"...

> --output (возможно -o) инициализация конфигурации параметров выводной информации после которой необходимо ввести путь к файлу в который запишется преобразованная текстовая информация
>> [пример] ...--output "./output.txt"... 
>> [пример] ...-o "./output.txt"...

> Если отсутствует файл в котором содержится информация необходимая для шифрования возможен вариант ввода текстовой информации из консоли. В данном случае парамет конфигурации --input (возможно -i) не указывается. При этом возможны два варианта вывода информации:

>> если необходимо преобразованную информацию вывести в файл то указывается параметр конфигурации --output (возможно -o) и вводится путь к файлу в который запишется преобразованная текстовая информация
>> [пример] node app.js --config "C1-A-R1" --output "./output.txt"
>> [пример] node app.js --config "C1-A-R1" -o "./output.txt"

>> если необходимо преобразованную информацию вывести сразу же в консоль параметр конфигурации --output (возможно -o) не указывается.
>> [пример] node app.js --config "C1-A-R1"
>> [пример] node app.js -c "C1-A-R1"

