read_file_tag() {
    file=$1
    tag=$(mdls -raw -name kMDItemUserTags $1 |sed '1d'|sed '$d'|sed 's#\U#\u#g'|iconv -f JAVA -t utf-8)
    echo $tag
}


#传入文件路径
read_file_tag $1

