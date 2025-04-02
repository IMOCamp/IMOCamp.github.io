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
		vector<string> v;
        for(auto a=findNext(s.begin(), s.end()); a.first!=s.end(); a=findNext(a.second, s.end())){
			string s;
            for(auto i=a.first; i<a.second; ++i)s+=*i;
            v.push_back(s);
        }
		int namecol=0;
		string &s=v[namecol], u0, u1;
		//string t="〇";
		string t="<img src='arctan.png' width='20pt'>";
		for(int i=0; i<3; ++i)u0.push_back(s[i]);
		for(int i=6; i<s.size(); ++i)u1.push_back(s[i]);
		s.clear();
		for(char i:u0)s.push_back(i);
		for(char i:t)s.push_back(i);
		for(char i:u1)s.push_back(i);
		//for(int i=0; i<3; ++i)s[i+3]=t[i];
		for(string i:v)cout<<"<td>"<<i<<"</td>";
        cout<<"</tr>\n";
    }
    cout<<"</table>\n";
}
