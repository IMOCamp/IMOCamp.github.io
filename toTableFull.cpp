#include <bits/stdc++.h>
using namespace std;

pair<string::iterator, string::iterator> findNext(string::iterator s, string::iterator ed){
    pair<string::iterator, string::iterator> a;
    string t=" \t\n\0";
    while(1){
        if(s==ed)break;
        bool k=0;
        for(auto i:t)if(i==*s)k=1;
        if(!k)break;
        ++s;
    }
    a.first=s;
    while(1){
        if(s==ed)break;
        bool k=0;
        for(auto i:t)if(i==*s)k=1;
        if(k)break;
        ++s;
    }
    a.second=s;
    return a;
}
string s;
int main(){
    cout<<"<table>\n";
    while(getline(cin, s)){
        cout<<"<tr>";
        for(auto a=findNext(s.begin(), s.end()); a.first!=s.end(); a=findNext(a.second, s.end())){
            cout<<"<td>";
            for(auto i=a.first; i<a.second; ++i)cout<<*i;
            cout<<"</td>";
        }
        cout<<"</tr>\n";
    }
    cout<<"</table>\n";
}
