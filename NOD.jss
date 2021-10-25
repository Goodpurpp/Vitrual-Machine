begin
input 110
input 120

begin1
comp 110 120
jz result
jm second
jp first

first
sub 110 120
jump begin1

second
sub 120 110
jump begin1


result
output 110
exit

result1
output 3000
exit