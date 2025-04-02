#include <bits/stdc++.h>
using namespace std;

signed main(){
    char si[100], so[100]; string S, T, U;
    cin>>S, T="<"+S+">", U="</"+S+">";
    for(int i=0; i<(int)S.size(); ++i)si[i]=so[i]=S[i];
    si[S.size()]=so[S.size()]='.';
    si[S.size()+1]='h', si[S.size()+2]='t', si[S.size()+3]='m', si[S.size()+4]='l';
    so[S.size()+1]='j', so[S.size()+2]='s';
    si[S.size()+5]=so[S.size()+3]='\0';
    ifstream in;
    ofstream out;
    in.open(si), out.open(so);
    out<<"var a=\"";
    bool fst=0;
    string s;
    while(getline(in, s)){
        if(fst)out<<"\\\n";
        for(int i=0; i<(int)s.size(); ++i)if(s[i]=='"')s[i]='\'';
        if(!fst){
            fst=1;
            for(int i=max((int)s.size()-(int)T.size(), (int)0), j=0; i<(int)s.size(); ++i, ++j)if(s[i]!=T[j])fst=0;
        }
        if(fst)out<<s;
        bool ed=1;
        for(int i=max((int)s.size()-(int)U.size(), (int)0), j=0; i<(int)s.size(); ++i, ++j)if(s[i]!=U[j])ed=0;
        if(ed)break;
    }
    out<<"\";\ndocument.write(a);";
}
