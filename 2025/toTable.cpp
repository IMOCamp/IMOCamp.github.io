#include <bits/stdc++.h>
using namespace std;

int col=2;

signed main(){
    cout<<"<table>\n";
    string s;
    bool t=1;
    while(cin>>s){
        cout<<"<tr>";
        for(int i=0; i<col; ++i){
            if(i)cin>>s;
            cout<<(t?"<th>":"<td>")<<s<<(t?"</th>":"</td>");
        }
        t=0;
        cout<<"</tr>\n";
    }
    cout<<"</table>\n";
}
