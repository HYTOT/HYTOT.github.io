cd cpp
set file_name=%0%
g++ %file_name:~-7,-5%.cpp
start a.exe
cmd