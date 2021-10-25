begin
input 110
set 101 1
set 999 1
set 2000 1
set 9999 0

begin1
comp 9999 110
jz result1

comp 110 101
jz result
jp multiply


multiply
add 101 2000
mul 999 101
jump begin1

result
output 999
exit

result1
output 2000
exit