#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int n, arr = 0;

int main(void) {
    scanf("%d", &n);
    while(n--) {
        char operation[30];
        int x;
        scanf("%s %d", &operation, &x);
        
        if(!strcmp("add", &operation)) {
            arr |= (1 << x); 
        } else if(!strcmp("empty", &operation)) {
            arr = 0;
        } else if(!strcmp("check", &operation)) {
            printf("%d\n", (arr & (1 << x)) > 0 ? 1 : 0);
        } else if(!strcmp("remove", &operation)) {
            arr &= ~(1 << x);
        } else if(!strcmp("toggle", &operation)) {
            arr ^= (1 << x);
        } else if(!strcmp("all", &operation)) {
            arr = (1 << 21) - 1;
        }
    }
    return 0;
}